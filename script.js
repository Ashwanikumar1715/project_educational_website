// ajax libarary used
$(document).ready(function () {
    $('.menu-btn').click(function(){
       $('.navbar .menu').toggleClass("active");
       $('.menu-btn i').toggleClass("active");
   });
});









document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      document.querySelector('.navbar').classList.add("sticky");
    } else {
      document.querySelector('.navbar').classList.remove("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      document.querySelector('.scroll-up-btn').classList.add("show");
    } else {
      document.querySelector('.scroll-up-btn').classList.remove("show");
    }
  });

  // slide-up script
  document.querySelector('.scroll-up-btn').addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // removing smooth scroll on slide-up button click
    document.documentElement.style.scrollBehavior = "auto";
  });

  var menuLinks = document.querySelectorAll('.navbar .menu li a');
  menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      // applying again smooth scroll on menu items click
      document.documentElement.style.scrollBehavior = "smooth";
    });
  });
});
