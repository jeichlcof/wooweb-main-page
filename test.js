const eventBtn = document.getElementById("event");

let eventChecker = false;

function bubbles() {
  let count = 200;
  const body = document.querySelector("body");
  let i = 0;
  while (i < count) {
    let bubble = document.createElement("i");
    bubble.setAttribute("class", "dot");
    let x = Math.floor(Math.random() * window.innerWidth) + 1;
    let y = Math.floor(Math.random() * window.innerHeight) + 1;

    let size = Math.random() * 10;
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    let delay = 5 + size;
    bubble.style.animationDuration = `${delay}s`;
    body.appendChild(bubble);
    i++;
  }
}

function eventController() {
  if (!eventChecker) {
    bubbles();
    eventChecker = true;
  } else {
    for (let i = 0; i < 200; i++) {
      const evetnDots = document.querySelector(".dot");
      const body = document.querySelector("body");
      body.removeChild(evetnDots);
    }
    eventChecker = false;
  }
}

function init() {
  eventBtn.addEventListener("click", eventController);
}

init();
