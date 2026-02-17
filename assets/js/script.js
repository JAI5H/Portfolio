// 'use strict';

// // element toggle function
// const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// // sidebar variables
// const sidebar = document.querySelector("[data-sidebar]");
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// // sidebar toggle functionality for mobile
// sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }
//   });
// }

// // page navigation variables
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// // add event to all nav link
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function () {
//     let targetPage = this.innerText.toLowerCase();

//     for (let j = 0; j < pages.length; j++) {
//       if (targetPage === pages[j].dataset.page) {
//         pages[j].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[j].classList.remove("active");
//         navigationLinks[j].classList.remove("active");
//       }
//     }
//   });
// }


'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle for mobile
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}

// page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    let targetPage = this.innerText.toLowerCase();

    for (let j = 0; j < pages.length; j++) {
      if (targetPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        if (navigationLinks[j]) {
          navigationLinks[j].classList.remove("active");
        }
      }
    }
  });
}

/* ===============================
   Testimonials Read More Feature
================================= */

const testimonialsTexts = document.querySelectorAll("[data-testimonials-text]");

testimonialsTexts.forEach(container => {

  const text = container.querySelector("p");

  // create button
  const btn = document.createElement("span");
  btn.textContent = "Read More";
  btn.className = "read-more-btn";

  container.appendChild(btn);

  btn.addEventListener("click", () => {
    text.classList.toggle("expanded");

    if (text.classList.contains("expanded")) {
      btn.textContent = "Show Less";
    } else {
      btn.textContent = "Read More";
    }
  });

});

const tList = document.querySelector(".testimonials-list");

tList.addEventListener("scroll", () => {
  const maxScroll = tList.scrollWidth - tList.clientWidth;
  const percent = tList.scrollLeft / maxScroll;

  const indicator = getComputedStyle(tList, "::after");
});