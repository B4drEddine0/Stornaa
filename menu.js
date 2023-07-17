// menu.js

document.addEventListener('DOMContentLoaded', function() {
    const navigation = document.querySelector('.navigation');
    const menuToggle = document.querySelector('.menu-toggle');
  
    menuToggle.addEventListener('click', function() {
      navigation.classList.toggle('active');
    });
  });
  