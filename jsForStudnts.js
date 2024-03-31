const navList = document.querySelector(".nav-list");
const menu = document.querySelector(".icon-toggler");
menu.addEventListener("click", () => {
  if (navList.classList.contains("show")) {
    navList.classList.remove("show");
  } else navList.classList.add("show");
});
console.log(navList, menu);
