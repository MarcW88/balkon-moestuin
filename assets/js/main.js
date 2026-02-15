/* =====================================================
   Balkon-Moestuin.nl — MVP JavaScript
   Clean, lightweight, progressive enhancement
   ===================================================== */

// ===== AUTO UPDATE COPYRIGHT YEAR =====
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ===== FAQ TOGGLE =====
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isActive = answer.classList.contains('active');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('active'));
    document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
    
    // Toggle current FAQ
    if (!isActive) {
      answer.classList.add('active');
      button.classList.add('active');
    }
  });
});

// ===== SIMPLE FILTER FOR HUB PAGES =====
const filterInput = document.getElementById('filter');
if (filterInput) {
  const filterableItems = document.querySelectorAll('[data-filter]');
  
  filterInput.addEventListener('input', () => {
    const query = filterInput.value.trim().toLowerCase();
    
    filterableItems.forEach(item => {
      const filterText = (item.getAttribute('data-filter') || '').toLowerCase();
      const shouldShow = filterText.includes(query) || query === '';
      item.style.display = shouldShow ? '' : 'none';
    });
  });
}

// ===== SMOOTH SCROLL TO ANCHORS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL without jumping
      if (history.pushState) {
        history.pushState(null, null, href);
      }
    }
  });
});

// ===== LAZY LOAD IMAGES (if native lazy loading not supported) =====
if ('loading' in HTMLImageElement.prototype === false) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.removeAttribute('loading');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// ===== ACTIVE NAV LINK HIGHLIGHT =====
const currentPath = window.location.pathname;
document.querySelectorAll('.nav a').forEach(link => {
  const linkPath = new URL(link.href).pathname;
  if (currentPath === linkPath || (linkPath !== '/' && currentPath.startsWith(linkPath))) {
    link.classList.add('active');
  }
});

// ===== TABLE OF CONTENTS AUTO-GENERATE (optional) =====
const tocContainer = document.getElementById('toc');
if (tocContainer) {
  const headings = document.querySelectorAll('main h2[id], main h3[id]');
  
  if (headings.length > 0) {
    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';
    
    headings.forEach(heading => {
      const li = document.createElement('li');
      li.className = heading.tagName.toLowerCase() === 'h3' ? 'toc-sub' : '';
      
      const a = document.createElement('a');
      a.href = `#${heading.id}`;
      a.textContent = heading.textContent;
      
      li.appendChild(a);
      tocList.appendChild(li);
    });
    
    tocContainer.appendChild(tocList);
  }
}

// ===== EXTERNAL LINKS (add icon + noopener) =====
document.querySelectorAll('a[href^="http"]').forEach(link => {
  if (!link.href.includes(window.location.hostname)) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

// ===== CONSOLE MESSAGE (optional branding) =====
console.log('%cBalkon-Moestuin.nl 🌱', 'color: #2d7a3e; font-size: 16px; font-weight: bold;');
console.log('Heb je een vraag of suggestie? Mail ons via contact@balkon-moestuin.nl');
