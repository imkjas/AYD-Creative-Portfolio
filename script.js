document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const leftHalf = document.querySelector(".left-half");
  const rightHalf = document.querySelector(".right-half");
  const overlayContent = document.querySelector(".overlay-content");
  const aboutMe = document.querySelector(".about-me");

  let isClicked = false;

  container.addEventListener("click", function () {
    if (isClicked) return;
    isClicked = true;

    // Move the halves outward (tear effect)
    leftHalf.style.transform = "translateX(-100%) rotate(-10deg)";
    rightHalf.style.transform = "translateX(100%) rotate(10deg)";

    // Fade out the logo and text
    overlayContent.style.opacity = "0";

    // Wait for the animation, then show About Me
    setTimeout(() => {
      aboutMe.style.opacity = "1";
      aboutMe.style.zIndex = "10"; // Bring About Me to front
    }, 1000);

    // Enable scrolling
    document.querySelector(".wrapper").style.overflowY = "auto";
  });
});
