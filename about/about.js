/* ***************** Preload Start**********************/
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
  setTimeout(() => (loader.style.display = "none"), 1000);
});

//................ Navbar Start ................//

(function ($) {
  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("nav-sticky");
    } else {
      $(".navbar").removeClass("nav-sticky");
    }
  });

  // Smooth scrolling on the navbar links
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        300,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  //................ Navbar End ................//
})(jQuery);

/* ********** Animate nav-link start ************ */

let nav = document.querySelectorAll(".nav-item");
const btn = document.querySelectorAll(".btn-box");

btn.forEach((item) =>
  item.addEventListener("click", () => {
    TweenMax.staggerFrom(
      nav,
      2,
      { scale: 0.5, opacity: 0, delay: 0.5, ease: Elastic.easeOut },
      0.2
    );
  })
);

/* ********** Animate nav-link end ************ */

/* ********** Animate section about start ************ */

let titleAbout = document.querySelectorAll(".title-about, .abt-1, .line-abt, .rs-title");
let socialLink = document.querySelectorAll(".social-links a");
let imgAbout = document.querySelectorAll(".img-about");

window.addEventListener("load", () => {
  TweenMax.staggerFrom(titleAbout, 1, {opacity: 0, delay: 0.3, ease:Back.easeIn}, 0.2);
});

window.addEventListener("load", () => {
  TweenMax.staggerFrom(socialLink, 1, {opacity: 0, delay: 0.3, ease:Back.easeIn}, 0.2);
});

window.addEventListener("load", () => {
  TweenMax.staggerFrom(imgAbout, 1, {opacity: 0, delay: 1.2, ease:Back.easeIn}, 0.2);
});


/* ********** Animate icon nav hamburger start ************ */

const allBoxes = document.querySelectorAll(".btn-box");

allBoxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
  });
});

/* ********** Animate icon nav hamburger end ************ */

/* **************** Animate section contact start***************** */
const anim = document.querySelectorAll(".ctc, .ctc-h1, .ctc-h2, form");

let options = {
  // root: null
  rootMargin: "-20% 0px",
  threshold: 0,
};

function handleIntersect(entries) {
  
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    }
  });
}

const observer = new IntersectionObserver(handleIntersect, options);

anim.forEach((text) => {
  observer.observe(text);
});
/* **************** Anim section contact end ***************** */
