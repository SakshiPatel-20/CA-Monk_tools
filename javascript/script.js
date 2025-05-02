/*------------------------------------- Page Loader -------------------------------------*/
$(function () {
  setTimeout(() => {
    $(".page-loader").fadeOut("slow");
  }, 500);
});

/*------------------------------------- Whole Page Scrolling Animation -------------------------------------*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    target.classList.toggle("show", isIntersecting);
  });
});

const hiddenElements = document.querySelectorAll(
  ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
);

document.addEventListener("DOMContentLoaded", () => {
  hiddenElements.forEach((el) => observer.observe(el));
});
/*------------------------------------- Sticky Header -------------------------------------*/
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition >= 20) {
      $("#top-header, #top-navbar").addClass("fixed");
    } else {
      $("#top-header, #top-navbar").removeClass("fixed");
    }
  });
});

/*------------------------------------- Toggle Header Menu -------------------------------------*/
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links-mn");
  const overlay = document.querySelector(".overlaytoggle");

  if (!navLinks || !overlay) return;

  if (navLinks.classList.contains("active")) {
    navLinks.classList.add("closing");
    overlay.classList.remove("active");
    setTimeout(() => {
      navLinks.classList.remove("active", "closing");
    }, 300);
  } else {
    navLinks.classList.remove("closing");
    navLinks.classList.add("active");
    overlay.classList.add("active");
  }
}

function initMenu() {
  // Close menu when clicking a menu link
  const menuLinks = document.querySelectorAll(".a-link");
  if (menuLinks.length > 0) {
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        toggleMenu();
      });
    });
  }

  // Close menu when clicking outside
  const navLinks = document.querySelector(".nav-links-mn");
  const overlay = document.querySelector(".overlaytoggle");
  const menuIcon = document.querySelector(".menu-icon");

  if (navLinks && overlay && menuIcon) {
    document.addEventListener("click", function (event) {
      if (
        !navLinks.contains(event.target) &&
        !menuIcon.contains(event.target) &&
        overlay.classList.contains("active")
      ) {
        toggleMenu();
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", initMenu);
/*------------------------------------- Section Menu Active -------------------------------------*/
$(document).ready(function () {
  $(window).on("scroll", function () {
    let scrollPosition = $(window).scrollTop();

    $(".nav-links .a-link").each(function () {
      let sectionID = $(this).attr("href");
      if ($(sectionID).length) {
        let sectionOffset = $(sectionID).offset().top - 50; // Adjust for navbar height
        let sectionHeight = $(sectionID).outerHeight();

        if (
          scrollPosition >= sectionOffset &&
          scrollPosition < sectionOffset + sectionHeight
        ) {
          $(".nav-links .a-link").removeClass("active");
          $(this).addClass("active");
        }
      }
    });
  });
});

/*-------------------------------------Personal Info Form DropDown-------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".custom-dropdown");

  if (dropdown) {
    const input = dropdown.querySelector("input");
    const options = dropdown.querySelectorAll(".dropdown-option");

    input.addEventListener("click", () => {
      dropdown.classList.toggle("active");
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        const selectedValue = option.getAttribute("data-value");
        input.value = selectedValue;
        dropdown.classList.remove("active");
      });
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  }
});

/*--------------Img Scrolling------------------*/
var controller = new ScrollMagic.Controller();
var slides = $(".image");
for (var i = 0; i < slides.length; i++) {
  var image = $("img", slides[i]);
  var tween = TweenMax.to(image, 1, { scale: 1.6, ease: Power0.easeNone });
  var scene = new ScrollMagic.Scene({
    triggerElement: slides[i],
    duration: "150%",
    triggerHook: "onEnter",
  })
    .setTween(tween)
    .addTo(controller);
}

/*------------- Button click text copy ---------------------*/
function copyText() {
  var textToCopy = document.querySelector(".image-text").innerText;

  var tempInput = document.createElement("textarea");
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);

  tempInput.select();
  document.execCommand("copy");

  document.body.removeChild(tempInput);
}

/*------------- Shop Slider Home Screen ---------------------*/
$(document).ready(function () {
  $(".creative-design-slider").slick({
    infinity: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

/*------------- Millions Slider Screen ---------------------*/
$(document).ready(function () {
  $(".millionsSlider").slick({
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  });
});

// All Slider box Same height
function setEqualHeight() {
  let maxHeight = Math.max(
    ...$(".milions-slider-box")
      .map((_, el) => $(el).outerHeight())
      .get()
  );
  $(".milions-slider-box").css("height", maxHeight);
}
$(document).ready(setEqualHeight);
$(".millionsSlider").on("setPosition", setEqualHeight);
$(window).on("resize", setEqualHeight);

/*------------------------------------- Scroll counter -------------------------------------*/
var counted = 0;
$(window).on("scroll", function () {
  var oTop = $(".counter").offset()?.top - window.innerHeight;
  if (counted === 0 && $(window).scrollTop() > oTop) {
    $(".count").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 800,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    counted = 1;
  }
});

/*------------------------------------- Infinite Marquee -------------------------------------*/
document.querySelectorAll(".logos").forEach(function (logosContainer) {
  const copy = logosContainer.querySelector(".logos-slide").cloneNode(true);
  logosContainer.appendChild(copy);
});

/*------------------------------------- Bottom To Top Button -------------------------------------*/
window.addEventListener("scroll", function () {
  var button = document.querySelector(".bottom-top-button");
  if (window.pageYOffset > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

document
  .querySelector(".bottom-top-button")
  .addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

/*-------------------------------------form-slider-------------------------------------*/
$(document).ready(function () {
  const $sliderMain = $(".form-slider");
  $sliderMain.slick({
    dots: false,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});

/*------------------------------------- Form Toggle -------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const signinToggle = document.getElementById("signin-toggle");
  const signupToggle = document.getElementById("signup-toggle");
  const signinForm = document.getElementById("signin-form");
  const signupForm = document.getElementById("signup-form");
  const switchLinks = document.querySelectorAll(".switch-form");

  if (signinToggle && signupToggle && signinForm && signupForm) {
    // Toggle between forms
    function toggleForm(showSignIn) {
      if (showSignIn) {
        signinToggle.classList.add("active");
        signupToggle.classList.remove("active");
        signinForm.classList.add("active");
        signupForm.classList.remove("active");
      } else {
        signinToggle.classList.remove("active");
        signupToggle.classList.add("active");
        signinForm.classList.remove("active");
        signupForm.classList.add("active");
      }
    }

    // Button click events
    signinToggle.addEventListener("click", () => toggleForm(true));
    signupToggle.addEventListener("click", () => toggleForm(false));

    // Switch form links (only if they exist)
    if (switchLinks.length > 0) {
      switchLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const showSignIn = link.textContent.trim() === "Sign In";
          toggleForm(showSignIn);
        });
      });
    }
  }
});

/*------------------------------------- Input Typing Text -------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".img-gner");
  const phrases = [
    "Smart Tools",
  ];
  let currentPhrase = 0;
  let currentLetter = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeWriter() {
    const placeholderText = phrases[currentPhrase].substring(0, currentLetter);
    input.placeholder = placeholderText;

    if (!isDeleting && currentLetter < phrases[currentPhrase].length) {
      currentLetter++;
      setTimeout(typeWriter, typingSpeed);
    } else if (isDeleting && currentLetter > 0) {
      currentLetter--;
      setTimeout(typeWriter, typingSpeed / 2);
    } else {
      isDeleting = !isDeleting;

      if (!isDeleting) {
        currentPhrase = (currentPhrase + 1) % phrases.length;
      }

      setTimeout(typeWriter, typingSpeed);
    }
  }
  setTimeout(typeWriter, 1000);
});

/*------------- custom-cursor ---------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");

  const arrowImg = document.createElement("img");
  arrowImg.src = "images/svg/arrow-bar-both.svg";
  arrowImg.classList.add("cursor-arrow");

  cursor.appendChild(arrowImg);
  document.body.appendChild(cursor);

  const suggBoxes = document.querySelectorAll(".cursor");

  suggBoxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      cursor.style.display = "block";
    });

    box.addEventListener("mouseleave", () => {
      cursor.style.display = "none";
    });

    box.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  });
});



