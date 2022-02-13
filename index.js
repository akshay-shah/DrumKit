var length = document.querySelectorAll(".drum").length;
var items = document.querySelectorAll(".drum");

for (let i = 0; i < length; i++) {
  items[i].addEventListener("click", function () {
    onButtonPress(items[i].textContent);
    buttonAnimation(items[i].textContent);
  });
}

document.addEventListener("keydown", function (event) {
  onButtonPress(event.key);
  buttonAnimation(event.key);
});

function onButtonPress(letter) {
  switch (letter) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  activeButton.style.color = "white"
  setTimeout(function () {
      activeButton.classList.remove("pressed");
      activeButton.style.color = "#DA0463";
  }, 100);
}
