/*
Template Name: CryptoLand - Crypto Currency Landing Page Template.
Author: GrayGrids
*/

(function () {
  //===== Prealoder

  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }

  /*=====================================
    Sticky
    ======================================= */
  window.onscroll = function () {
    var header_navbar = document.querySelector(".navbar-area");
    const logoHeader = document.querySelector(".img-header");
    var sticky = header_navbar.offsetTop;

    var logo = document.querySelector(".navbar-brand img");
    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
      logo.src = "assets/logo.jpg";
      logoHeader.style.margin = "0";
      logoHeader.style.padding = "0";
    } else {
      header_navbar.classList.remove("sticky");
      logo.src = "assets/logo.jpg";
      logoHeader.style.margin = "";
      logoHeader.style.padding = "";
    }
    // show or hide the back-top-top button
    var backToTo = document.querySelector(".scroll-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = "flex";
    } else {
      backToTo.style.display = "none";
    }
  };

  // WOW active
  new WOW().init();

  //===== mobile-menu-btn
  let navbarToggler = document.querySelector(".mobile-menu-btn");
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });
})();

// JavaScript to handle the progress bar
document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  document.querySelector(".timeline").appendChild(progressBar);

  const timeline = document.querySelector(".timeline");
  const timelineSteps = document.querySelectorAll(".timeline-step");
  const timelineHeight = timeline.offsetHeight;
  const timelineOffsetTop = timeline.offsetTop;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const scrollBottom = scrollTop + window.innerHeight;

    // Calculate the visible portion of the timeline
    const timelineVisibleTop = Math.max(scrollTop, timelineOffsetTop);
    const timelineVisibleBottom = Math.min(scrollBottom, timelineOffsetTop + timelineHeight);

    // Calculate the progress percentage
    const progressPercentage = ((timelineVisibleBottom - timelineOffsetTop) / timelineHeight) * 100;

    // Update the progress bar height
    progressBar.style.height = `${Math.min(100, Math.max(0, progressPercentage))}%`;
  });
});
