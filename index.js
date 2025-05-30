  const bottomSecItems = document.querySelectorAll(".bottom-sec-3-item:not(.bottom-sec-3-disabled)");
  const bottomSecImage = document.getElementById("bottom-sec-3-displayImage");
  const bottomSecImages = ["./img/change1.png", "./img/change2.png", "./img/change3.png"];
  let bottomSecActive = null;

  bottomSecItems.forEach(item => {
    item.addEventListener("click", () => {
      const index = parseInt(item.dataset.index);

      if (bottomSecActive === index) {
        item.querySelector(".bottom-sec-3-content").style.display = "none";
        item.querySelector(".bottom-sec-3-symbol").textContent = "+";
        bottomSecActive = null;
      } else {
        if (bottomSecActive !== null) {
          const prev = document.querySelector(`.bottom-sec-3-item[data-index='${bottomSecActive}']`);
          prev.querySelector(".bottom-sec-3-content").style.display = "none";
          prev.querySelector(".bottom-sec-3-symbol").textContent = "+";
        }
        item.querySelector(".bottom-sec-3-content").style.display = "block";
        item.querySelector(".bottom-sec-3-symbol").textContent = "−";
        bottomSecImage.src = bottomSecImages[index];
        bottomSecActive = index;
      }
    });
  });

function updateHeadingsForMobile() {
    const mainHeading = document.getElementById('main-heading');
    const subHeading = document.getElementById('sub-heading');

    if (window.innerWidth <= 768) {
      mainHeading.innerHTML = 'Your Smile,<br/> Our Priority At<br><span class="highlight-text">Clove Dental</span>';
      subHeading.textContent = "Expert RCT, Zero Pain. Right Here in Delhi";
    } else {
      mainHeading.textContent = "Painless Root Canal Treatment in Delhi";
      subHeading.textContent = "Expert RCT. Zero Pain. Right Here in Delhi";
    }
}
updateHeadingsForMobile();

window.addEventListener('resize', updateHeadingsForMobile);