let searchBtnToggler = document.querySelector(".search-btn");
let account = document.querySelector(".account");
let globalShowBtn = document.querySelector(".global-toggler");
let globalCloseBtn = document.querySelector(".close-modal-btn");
let menuMobileBtn = document.getElementById("menu");
let menuOpenBtn = document.querySelector(".menu");
// ****************************************
menuMobileBtn.addEventListener("click", () => {
  document.querySelector(".menu-left").classList.toggle("menu-left-close");
});
menuOpenBtn.addEventListener("click", () => {
  document.querySelector(".menu-left").classList.toggle("menu-left-close");
});

// ****************************************
searchBtnToggler.addEventListener("click", () => {
  document.querySelector(".search-box").classList.toggle("search-box-toggler");
});
// ****************************************
account.addEventListener("click", () => {
  document
    .querySelector(".account-login")
    .classList.toggle("account-login-toggler");
});
// ****************************************
// globalShowBtn.addEventListener("click", () => {
//   document.querySelector(".location").classList.add("location-toggle-class");
// });
// globalCloseBtn.addEventListener("click", () => {
//   document.querySelector(".location").classList.remove("location-toggle-class");
// });
