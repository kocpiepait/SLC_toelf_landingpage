// inisialisasi variabel
const popup = document.getElementById("descriptionPopup");
const btn = document.getElementById("moreInfoBtn");
const span = document.getElementsByClassName("close")[0];

// ketika klik tombol muncul pop up
btn.onclick = function () {
  popup.style.display = "block";
};

// ketika klik tombol (x) akan di close
span.onclick = function () {
  popup.style.display = "none";
};

// Ketika klik di mana saja akan di close
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

document
  .querySelector(".mobile-menu-button")
  .addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.toggle("active");
  });

document.addEventListener("click", function (event) {
  const menu = document.querySelector(".mobile-menu");
  const button = document.querySelector(".mobile-menu-button");

  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  const menu = document.querySelector(".mobile-menu");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  }
});
