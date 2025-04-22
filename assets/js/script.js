document.addEventListener('DOMContentLoaded', function() {
  // 코드 블록 초기화
  initCodeBlocks();
  
  // 프롬프트 블록 초기화
  initPromptBlocks();
  
  // 머메이드 초기화
  initMermaid();
  
  // 본명조 커스텀 블록 처리
  document.querySelectorAll('pre code.language-serif').forEach(block => {
    const content = block.textContent;
    const div = document.createElement('div');
    div.className = 'serif-block';
    div.innerHTML = content;
    
    // 코드 블록을 새로운 div로 교체
    const pre = block.parentNode;
    pre.parentNode.replaceChild(div, pre);
  });
  
  // 기울임체 본명조 블록
  document.querySelectorAll('pre code.language-serif-italic').forEach(block => {
    const content = block.textContent;
    const div = document.createElement('div');
    div.className = 'serif-block italic';
    div.innerHTML = content;
    
    // 코드 블록을 새로운 div로 교체
    const pre = block.parentNode;
    pre.parentNode.replaceChild(div, pre);
  });
});

// 코드 블록 처리
function initCodeBlocks() {
  // 모든 pre 태그에 line-numbers 클래스 추가
  const preElements = document.querySelectorAll('pre');
  
  preElements.forEach(pre => {
    if (pre.classList.contains('processed')) return;
    
    const codeElement = pre.querySelector('code');
    if (!codeElement) return;
    
    // 언어 클래스 확인 및 추가
    if (!hasLanguageClass(codeElement)) {
      codeElement.classList.add('language-text');
    }
    
    // 라인 번호 표시를 위한 클래스 추가
    pre.classList.add('line-numbers');
    
    // 복사 버튼 추가
    addCopyButtonTo(pre, codeElement);
    
    pre.classList.add('processed');
  });
  
  // 구문 강조 적용
  if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
  }
}

// 언어 클래스 확인
function hasLanguageClass(element) {
  return Array.from(element.classList).some(cls => cls.startsWith('language-'));
}

// 복사 버튼 추가
function addCopyButtonTo(pre, code) {
  if (pre.querySelector('.copy-button')) return;
  
  const copyButton = document.createElement('button');
  copyButton.className = 'copy-button';
  copyButton.textContent = '복사';
  copyButton.setAttribute('aria-label', '코드 복사');
  
  copyButton.addEventListener('click', () => {
    const textContent = code.textContent || '';
    
    navigator.clipboard.writeText(textContent)
      .then(() => {
        copyButton.textContent = '복사됨!';
        setTimeout(() => {
          copyButton.textContent = '복사';
        }, 2000);
      })
      .catch(err => {
        console.error('클립보드 복사 실패:', err);
        copyButton.textContent = '복사 실패';
        setTimeout(() => {
          copyButton.textContent = '복사';
        }, 2000);
      });
  });
  
  pre.appendChild(copyButton);
}

// 프롬프트 블록 처리
function initPromptBlocks() {
  // prompt 클래스가 있는 코드 블록을 찾아 변환
  const promptBlocks = document.querySelectorAll('pre > code[class*="language-prompt"]');
  
  promptBlocks.forEach(block => {
    const preElement = block.parentElement;
    if (!preElement || preElement.classList.contains('processed-prompt')) return;
    
    const content = block.textContent || '';
    const classList = Array.from(block.classList);
    
    // 프롬프트 타입 확인 (user 또는 assistant)
    let promptType = '';
    for (const cls of classList) {
      if (cls.includes('prompt:')) {
        promptType = cls.split(':')[1];
        break;
      }
    }
    
    if (!promptType) return;
    
    // 프롬프트 블록 생성
    const promptBlock = document.createElement('div');
    promptBlock.className = `prompt-block prompt-${promptType}`;
    
    // 헤더 생성
    const header = document.createElement('div');
    header.className = 'prompt-header';
    header.textContent = promptType === 'user' ? '사용자' : '도우미';
    
    // 콘텐츠 생성
    const promptContent = document.createElement('div');
    promptContent.className = 'prompt-content';
    promptContent.textContent = content;
    
    // 블록 구성
    promptBlock.appendChild(header);
    promptBlock.appendChild(promptContent);
    
    // 기존 코드 블록을 새 프롬프트 블록으로 교체
    preElement.parentNode?.replaceChild(promptBlock, preElement);
  });
}

// 머메이드 초기화
function initMermaid() {
  if (typeof mermaid !== 'undefined') {
    // 머메이드 설정
    mermaid.initialize({
      startOnLoad: true,
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'
    });
    
    // 머메이드 블록 처리
    const mermaidBlocks = document.querySelectorAll('pre > code.language-mermaid');
    
    mermaidBlocks.forEach(block => {
      const preElement = block.parentElement;
      if (!preElement || preElement.classList.contains('processed-mermaid')) return;
      
      const code = block.textContent || '';
      
      const container = document.createElement('div');
      container.className = 'mermaid';
      container.textContent = code;
      
      // 기존 pre 요소 뒤에 새 머메이드 컨테이너 추가
      preElement.insertAdjacentElement('afterend', container);
      
      // 기존 pre 요소 숨기기
      preElement.style.display = 'none';
      
      // 처리 완료 표시
      preElement.classList.add('processed-mermaid');
    });
    
    // 머메이드 렌더링
    mermaid.init(undefined, '.mermaid');
  }
} 