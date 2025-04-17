#!/usr/bin/env node

/**
 * 마인드맵 데이터 생성 스크립트
 * 
 * 이 스크립트는 _posts 디렉토리의 모든 마크다운 파일을 분석하여
 * 마인드맵 데이터를 생성합니다. 태그, 카테고리, 포스트 간의 관계를
 * 계층적으로 구성합니다.
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const glob = require('glob');

// 설정 변수
const POSTS_DIR = '_posts';
const WIKI_DIR = '_wiki';
const OUTPUT_FILE = path.join('assets', 'data', 'mindmap.json');

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
            data: {
              ...data,
              date,
              year,
              month,
              day
            },
            type: 'post'
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
          data,
          type: 'wiki'
        });
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
  
  return documents;
}

// 문서에서 태그와 카테고리 수집
function collectTagsAndCategories(documents) {
  const tags = new Set();
  const categories = new Set();
  const tagToDocuments = {};
  const categoryToDocuments = {};
  
  documents.forEach(doc => {
    // 태그 처리
    const docTags = doc.data.tags || [];
    if (Array.isArray(docTags)) {
      docTags.forEach(tag => {
        // 태그 정규화 (소문자, 공백 제거)
        const normalizedTag = tag.toLowerCase().trim();
        
        tags.add(normalizedTag);
        
        if (!tagToDocuments[normalizedTag]) {
          tagToDocuments[normalizedTag] = [];
        }
        
        tagToDocuments[normalizedTag].push(doc);
      });
    } else if (typeof docTags === 'string' && docTags.trim() !== '') {
      // 태그가 문자열로 제공된 경우
      const normalizedTag = docTags.toLowerCase().trim();
      
      tags.add(normalizedTag);
      
      if (!tagToDocuments[normalizedTag]) {
        tagToDocuments[normalizedTag] = [];
      }
      
      tagToDocuments[normalizedTag].push(doc);
    }
    
    // 카테고리 처리
    const category = doc.data.category || '';
    if (category && typeof category === 'string' && category.trim() !== '') {
      const normalizedCategory = category.toLowerCase().trim();
      
      categories.add(normalizedCategory);
      
      if (!categoryToDocuments[normalizedCategory]) {
        categoryToDocuments[normalizedCategory] = [];
      }
      
      categoryToDocuments[normalizedCategory].push(doc);
    }
  });
  
  return {
    tags: [...tags],
    categories: [...categories],
    tagToDocuments,
    categoryToDocuments
  };
}

// 마인드맵 데이터 생성
function generateMindMapData(documents, tagsAndCategories) {
  const { tags, categories, tagToDocuments, categoryToDocuments } = tagsAndCategories;
  
  // 루트 노드
  const rootNode = {
    id: 'root',
    name: '블로그',
    children: []
  };
  
  // 연도별 노드 생성 (포스트)
  const yearMap = {};
  const postsByYear = {};
  
  documents.filter(doc => doc.type === 'post').forEach(doc => {
    const year = doc.data.year;
    
    if (!postsByYear[year]) {
      postsByYear[year] = [];
    }
    
    postsByYear[year].push(doc);
  });
  
  // 연도별 포스트 추가
  const yearsNode = {
    id: 'years',
    name: '연도별 포스트',
    children: []
  };
  
  Object.keys(postsByYear).sort().reverse().forEach(year => {
    const yearNode = {
      id: `year-${year}`,
      name: `${year}년`,
      children: []
    };
    
    // 월별로 그룹화
    const postsByMonth = {};
    
    postsByYear[year].forEach(post => {
      const month = post.data.month;
      
      if (!postsByMonth[month]) {
        postsByMonth[month] = [];
      }
      
      postsByMonth[month].push(post);
    });
    
    // 월별 노드 추가
    Object.keys(postsByMonth).sort().forEach(month => {
      const monthNode = {
        id: `month-${year}-${month}`,
        name: `${month}월`,
        children: []
      };
      
      // 포스트 추가
      postsByMonth[month].forEach(post => {
        monthNode.children.push({
          id: `post-${post.url}`,
          name: post.title,
          url: post.url,
          type: 'post'
        });
      });
      
      yearNode.children.push(monthNode);
    });
    
    yearsNode.children.push(yearNode);
  });
  
  rootNode.children.push(yearsNode);
  
  // 카테고리 노드 생성
  if (categories.length > 0) {
    const categoriesNode = {
      id: 'categories',
      name: '카테고리',
      children: []
    };
    
    categories.sort().forEach(category => {
      const categoryNode = {
        id: `category-${category}`,
        name: category,
        type: 'category',
        children: []
      };
      
      // 카테고리에 속한 문서 추가
      if (categoryToDocuments[category]) {
        categoryToDocuments[category].forEach(doc => {
          categoryNode.children.push({
            id: `doc-${doc.url}`,
            name: doc.title,
            url: doc.url,
            type: doc.type
          });
        });
      }
      
      categoriesNode.children.push(categoryNode);
    });
    
    rootNode.children.push(categoriesNode);
  }
  
  // 태그 노드 생성
  if (tags.length > 0) {
    const tagsNode = {
      id: 'tags',
      name: '태그',
      children: []
    };
    
    tags.sort().forEach(tag => {
      const tagNode = {
        id: `tag-${tag}`,
        name: tag,
        type: 'tag',
        children: []
      };
      
      // 태그에 속한 문서 추가
      if (tagToDocuments[tag]) {
        tagToDocuments[tag].forEach(doc => {
          tagNode.children.push({
            id: `doc-${doc.url}`,
            name: doc.title,
            url: doc.url,
            type: doc.type
          });
        });
      }
      
      tagsNode.children.push(tagNode);
    });
    
    rootNode.children.push(tagsNode);
  }
  
  // 위키 노드 생성 (위키 문서가 있는 경우)
  const wikiDocs = documents.filter(doc => doc.type === 'wiki');
  
  if (wikiDocs.length > 0) {
    const wikiNode = {
      id: 'wiki',
      name: '위키',
      children: []
    };
    
    // 위키 문서를 경로에 따라 그룹화
    const wikiGroups = {};
    
    wikiDocs.forEach(doc => {
      const url = doc.url;
      const parts = url.split('/').filter(part => part !== '');
      
      // 첫 번째 부분은 'wiki'
      if (parts.length > 1) {
        const group = parts[1];
        
        if (!wikiGroups[group]) {
          wikiGroups[group] = [];
        }
        
        wikiGroups[group].push(doc);
      } else {
        // 루트 위키 문서는 직접 추가
        wikiNode.children.push({
          id: `wiki-${doc.url}`,
          name: doc.title,
          url: doc.url,
          type: 'wiki'
        });
      }
    });
    
    // 그룹별로 추가
    Object.keys(wikiGroups).sort().forEach(group => {
      const groupNode = {
        id: `wiki-group-${group}`,
        name: group,
        children: []
      };
      
      wikiGroups[group].forEach(doc => {
        groupNode.children.push({
          id: `wiki-${doc.url}`,
          name: doc.title,
          url: doc.url,
          type: 'wiki'
        });
      });
      
      wikiNode.children.push(groupNode);
    });
    
    rootNode.children.push(wikiNode);
  }
  
  return rootNode;
}

// 메인 함수
function main() {
  try {
    console.log('마인드맵 데이터 생성 시작...');
    
    // 문서 수집
    const documents = collectDocuments();
    console.log(`${documents.length}개 문서를 찾았습니다.`);
    
    // 태그 및 카테고리 수집
    const tagsAndCategories = collectTagsAndCategories(documents);
    console.log(`${tagsAndCategories.tags.length}개 태그와 ${tagsAndCategories.categories.length}개 카테고리를 찾았습니다.`);
    
    // 마인드맵 데이터 생성
    const mindMapData = generateMindMapData(documents, tagsAndCategories);
    
    // 출력 디렉토리 확인
    ensureDirectoryExists(OUTPUT_FILE);
    
    // 마인드맵 데이터 저장
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(mindMapData, null, 2));
    console.log(`마인드맵 데이터 저장 완료: ${OUTPUT_FILE}`);
  } catch (err) {
    console.error('오류 발생:', err);
    process.exit(1);
  }
}

// 스크립트 실행
main(); 