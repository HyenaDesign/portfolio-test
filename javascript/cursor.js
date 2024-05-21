document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.getElementById('cursor');
  
    document.addEventListener('mousemove', function (e) {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  
    const hoverElements = document.querySelectorAll('.hover-effect');
    const clickableLinks = document.querySelectorAll('a, button');
  
    hoverElements.forEach((element) => {
      element.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
      });
      element.addEventListener('mouseout', () => {
        cursor.classList.remove('hover');
      });
    });
  
    clickableLinks.forEach((element) => {
      element.addEventListener('mouseover', () => {
        cursor.classList.add('clickable-hover');
      });
      element.addEventListener('mouseout', () => {
        cursor.classList.remove('clickable-hover');
      });
    });
  });
  