var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").classList.remove("hide");
  } else {
    document.querySelector("header").classList.add("hide");
  }
  prevScrollPos = currentScrollPos;
};

document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion-item');

  accordions.forEach((accordion) => {
    const heading = accordion.querySelector('.accordion-heading');
    heading.addEventListener('click', () => {
      accordion.classList.toggle('open');
      const content = accordion.querySelector('.accordion-content');
      if (accordion.classList.contains('open')) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
});


const navigation = document.querySelector('.navigation');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', function() {
  navigation.classList.toggle('active');
});
