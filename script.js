// Image Zoom Modal Functionality
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

// Open modal on image click
document.querySelectorAll(".cert-image").forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Close modal on click
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal if clicked outside image
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
