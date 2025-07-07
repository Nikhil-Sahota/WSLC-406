const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');
const tabsContainer = document.getElementById('tabs');
const tabs = document.querySelectorAll('.tab');
const images = document.querySelectorAll('.gallery img');

// Update arrow visibility
function updateArrows() {
  const scrollLeft = tabsContainer.scrollLeft;
  const maxScroll = tabsContainer.scrollWidth - tabsContainer.clientWidth;

  leftBtn.style.display = scrollLeft > 0 ? 'block' : 'none';
  rightBtn.style.display = scrollLeft < maxScroll ? 'block' : 'none';
}

// Scroll buttons
leftBtn.addEventListener('click', () => {
  tabsContainer.scrollBy({ left: -200, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  tabsContainer.scrollBy({ left: 200, behavior: 'smooth' });
});

// Monitor scrolling
tabsContainer.addEventListener('scroll', updateArrows);

// Tab filtering
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelector('.tab.active').classList.remove('active');
    tab.classList.add('active');

    const category = tab.getAttribute('data-category');

    images.forEach(img => {
      const classList = img.classList;
      if (category === 'all' || classList.contains(category)) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  });
});

// Initial state
window.addEventListener('DOMContentLoaded', () => {
  updateArrows();
  document.querySelector('.tab.active').click(); // trigger filter on load
});
