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
