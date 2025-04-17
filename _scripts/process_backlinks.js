#!/usr/bin/env node

/**
 * 역링크 데이터 생성 스크립트
 * 
 * 이 스크립트는 _posts 디렉토리의 모든 마크다운 파일을 분석하여
 * 파일 간 참조 관계를 파악하고, 역링크 데이터를 생성합니다.
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const glob = require('glob');

// 설정 변수
const POSTS_DIR = '_posts';
const WIKI_DIR = '_wiki';
const OUTPUT_FILE = path.join('assets', 'data', 'backlinks.json');
const LINK_REGEX = /\[([^\]]+)\]\(([^)]+)\)/g;
const WIKILINK_REGEX = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

// 데이터 디렉토리 확인 및 생성
function ensureDirectoryExists(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExists(dirname);
  fs.mkdirSync(dirname);
}

// 모든 문서 수집
function collectDocuments() {
  const documents = [];
  
  // _posts 디렉토리에서 모든 .md 파일 찾기
  if (fs.existsSync(POSTS_DIR)) {
    const postFiles = glob.sync(`${POSTS_DIR}/**/*.md`);
    
    for (const file of postFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const { data, content: body } = matter(content);
        
        // 문서 경로 (URL) 생성
        const filename = path.basename(file);
        const match = filename.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/);
        
        if (match) {
          const [, date, slug] = match;
          const year = date.substring(0, 4);
          const month = date.substring(5, 7);
          const day = date.substring(8, 10);
          
          const url = `/${year}/${month}/${day}/${slug}/`;
          
          documents.push({
            path: file,
            url,
            title: data.title || slug,
            content: body,
            data
          });
        }
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
  
  // _wiki 디렉토리에서 모든 .md 파일 찾기
  if (fs.existsSync(WIKI_DIR)) {
    const wikiFiles = glob.sync(`${WIKI_DIR}/**/*.md`);
    
    for (const file of wikiFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const { data, content: body } = matter(content);
        
        // 문서 경로 (URL) 생성
        const relativePath = path.relative(WIKI_DIR, file);
        const dirName = path.dirname(relativePath);
        const baseName = path.basename(relativePath, '.md');
        
        let url;
        if (dirName === '.') {
          url = `/wiki/${baseName}/`;
        } else {
          url = `/wiki/${dirName}/${baseName}/`;
        }
        
        documents.push({
          path: file,
          url,
          title: data.title || baseName,
          content: body,
          data
        });
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
  
  return documents;
}

// 문서 간 링크 분석
function analyzeLinks(documents) {
  const backlinks = {};
  
  // URL 맵 생성 (제목 -> URL)
  const urlMap = {};
  const pathMap = {};
  
  documents.forEach(doc => {
    urlMap[doc.title.toLowerCase()] = doc.url;
    pathMap[doc.path] = doc.url;
  });
  
  // 각 문서를 분석하여 링크 찾기
  documents.forEach(doc => {
    // 일반 마크다운 링크 찾기
    let linkMatches;
    while ((linkMatches = LINK_REGEX.exec(doc.content)) !== null) {
      const [, linkText, linkUrl] = linkMatches;
      
      // 내부 링크인지 확인
      if (!linkUrl.startsWith('http') && !linkUrl.startsWith('#')) {
        let targetUrl;
        
        if (linkUrl.startsWith('/')) {
          // 절대 경로
          targetUrl = linkUrl;
        } else {
          // 상대 경로
          const docDir = path.dirname(doc.path);
          const targetPath = path.resolve(docDir, linkUrl);
          
          if (pathMap[targetPath]) {
            targetUrl = pathMap[targetPath];
          } else if (linkUrl.endsWith('.md')) {
            // .md 확장자를 제거하고 URL 구성
            const linkWithoutExt = linkUrl.substring(0, linkUrl.length - 3);
            targetUrl = `/${linkWithoutExt}/`;
          } else {
            targetUrl = `/${linkUrl}/`;
          }
        }
        
        // 역링크 데이터에 추가
        if (!backlinks[targetUrl]) {
          backlinks[targetUrl] = [];
        }
        
        // 중복 방지
        const exists = backlinks[targetUrl].some(link => link.url === doc.url);
        if (!exists) {
          backlinks[targetUrl].push({
            url: doc.url,
            title: doc.title,
            excerpt: extractExcerpt(doc.content, linkText)
          });
        }
      }
    }
    
    // 위키 링크 찾기 ([[Title]] 또는 [[Title|Alias]])
    let wikiMatches;
    while ((wikiMatches = WIKILINK_REGEX.exec(doc.content)) !== null) {
      const [, target, alias] = wikiMatches;
      const linkTitle = alias || target;
      const targetLower = target.toLowerCase();
      
      // 매칭되는 문서 찾기
      if (urlMap[targetLower]) {
        const targetUrl = urlMap[targetLower];
        
        // 역링크 데이터에 추가
        if (!backlinks[targetUrl]) {
          backlinks[targetUrl] = [];
        }
        
        // 중복 방지
        const exists = backlinks[targetUrl].some(link => link.url === doc.url);
        if (!exists) {
          backlinks[targetUrl].push({
            url: doc.url,
            title: doc.title,
            excerpt: extractExcerpt(doc.content, linkTitle)
          });
        }
      }
    }
  });
  
  return backlinks;
}

// 인용 부분 추출
function extractExcerpt(content, keyword, length = 150) {
  // 키워드 주변 텍스트 찾기
  const keywordIndex = content.indexOf(keyword);
  if (keywordIndex === -1) return '';
  
  // 문장 추출 (키워드를 포함하는 문장)
  const start = content.lastIndexOf('.', keywordIndex) + 1;
  const end = content.indexOf('.', keywordIndex + keyword.length) + 1;
  
  if (start >= 0 && end > start) {
    let excerpt = content.substring(start, end).trim();
    
    // 너무 긴 경우 자르기
    if (excerpt.length > length) {
      excerpt = excerpt.substring(0, length) + '...';
    }
    
    return excerpt;
  }
  
  // 문장을 찾을 수 없는 경우 키워드 주변 텍스트 사용
  const halfLength = Math.floor(length / 2);
  const excerptStart = Math.max(0, keywordIndex - halfLength);
  const excerptEnd = Math.min(content.length, keywordIndex + keyword.length + halfLength);
  
  let excerpt = content.substring(excerptStart, excerptEnd);
  
  // 단어 경계에서 자르기
  if (excerptStart > 0) {
    const firstSpace = excerpt.indexOf(' ');
    if (firstSpace > 0) {
      excerpt = excerpt.substring(firstSpace);
    }
  }
  
  if (excerptEnd < content.length) {
    const lastSpace = excerpt.lastIndexOf(' ');
    if (lastSpace > 0) {
      excerpt = excerpt.substring(0, lastSpace);
    }
  }
  
  return excerpt.trim() + '...';
}

// 메인 함수
function main() {
  try {
    console.log('역링크 데이터 생성 시작...');
    
    // 문서 수집
    const documents = collectDocuments();
    console.log(`${documents.length}개 문서를 찾았습니다.`);
    
    // 링크 분석
    const backlinks = analyzeLinks(documents);
    
    // 출력 디렉토리 확인
    ensureDirectoryExists(OUTPUT_FILE);
    
    // 역링크 데이터 저장
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(backlinks, null, 2));
    console.log(`역링크 데이터 저장 완료: ${OUTPUT_FILE}`);
  } catch (err) {
    console.error('오류 발생:', err);
    process.exit(1);
  }
}

// 스크립트 실행
main(); 