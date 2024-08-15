window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  loader.style.opacity = '0';
  setTimeout(() => {
      loader.style.display = 'none';
  }, 600); // Adjust the timing if needed
});
document.querySelector('.custom-btn.btn-14').addEventListener('click', function() {
  window.open('https://www.instagram.com/p/C9yjxnUomCu/', '_blank');
});
VANTA.WAVES({
  el: "#vanta-canvas",
  mouseControls: false,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x000018,
  shininess: 17.00,
  waveHeight: 9.50,
  zoom: 1.02
})
let lastUpdate = 0;
const fpsLimit = 30;

function updateAnimation(timestamp) {
  if (timestamp - lastUpdate > 1000 / fpsLimit) {
    lastUpdate = timestamp;
    vantaEffect.update(); // Trigger update if applicable
  }
  requestAnimationFrame(updateAnimation);
}

requestAnimationFrame(updateAnimation);
   // JavaScript to prevent body scrolling when navbar is open
   document.getElementById('navi-toggle').addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  });

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
  });
  navLinks.addEventListener('scroll', (e)=>{
      console.log("scroll kiya")
      e.stopPropagation();
  })
});
// read button js
function truncateText(text, limit) {
  return text.slice(limit)
}
function toggleText(contentId, showBtnId, hideBtnId) {
  var content = document.getElementById(contentId);
  var showBtn = document.getElementById(showBtnId);
  var hideBtn = document.getElementById(hideBtnId);

  if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block"; // Set to "block" for block-level elements
      showBtn.style.display = "none";
      hideBtn.style.display = "inline";
      
  } else {
      
      content.style.display = "none";
      showBtn.style.display = "inline";
      hideBtn.style.display = "none";
  }
}