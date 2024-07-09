/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");
let modal = (modalClick) => {
  modalViews[modalClick].classList.add("active-modal");
};
modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});
// let close =(closeClick)=>{
//     modalViews[closeClick].classList.remove('active-modal');
// }
// modalClose.forEach((mb,i)=>{mb.addEventListener('click',()=>{
//     close(i);
// })});
modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const linkWork = document.querySelectorAll(".work__item");
function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}
linkWork.forEach((l) => l.addEventListener("click", activeWork));

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper(".testimonial__container", {
  // Optional parameters
  spaceBetween: 24,
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*="#' + sectionId + '"]')
        .classList.add("active-link");
    } else {
      document
        .querySelector('.nav__menu a[href*="#' + sectionId + '"]')
        .classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";
// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme"),
       selectedIcon = localStorage.getItem("selected-icon");
// we obtain the current theme that the interface has by validating the light theme class
const getCurrentTheme = () => {
  document.body.classList.contains(lightTheme) ? "dark" : "light";
};
const getCurrentIcon = () => {
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";
};

// We validate if the user chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the  issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate dark theme
themeButton.addEventListener("click", () => {
  // add or remove the dark/ icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // save the theme and current icon
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay:400,
  reset: true,
});
sr.reveal('.home__data')
sr.reveal('.home__handle',{delay:700})
sr.reveal('.home__social,.home__scroll',{delay:900,origin: 'bottom',})
