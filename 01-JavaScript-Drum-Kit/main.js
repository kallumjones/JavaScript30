// console.log("hello");

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const drum = document.querySelector(`div[data-key="${event.keyCode}"]`);

  if (!audio) return; //if no audio does not then return a null
  audio.currentTime = 0; //rewind so can hot repeated note multiple times
  audio.play();

  drum.classList.add("playing");
  //   drum.classList.toggle("playing");a
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  //   console.log(this);
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
