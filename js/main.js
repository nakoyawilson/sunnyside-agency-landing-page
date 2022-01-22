const menuButton = document.querySelector(".menu-button");
const navigationLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".link");

menuButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("open");
  if (navigationLinks.classList.contains("open")) {
    menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>`;
  } else {
    menuButton.innerHTML = `<svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>`;
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navigationLinks.classList.remove("open");
    menuButton.innerHTML = `<svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>`;
  });
});
