var length = document.querySelectorAll(".drum").length;
var items = document.querySelectorAll(".drum");

for (let i = 0; i < length; i++) {
  items[i].addEventListener("click", function () {
    items[i].style.color = "white";
    onButtonPress(items[i].textContent);
  });
}

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

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  onButtonPress(event.key);
});

class HouseKeeper {
  constructor(name, experience, skills) {
    this.name = name;
    this.experience = experience;
    this.skills = skills;
  }
}

var houseKeeper = [];
houseKeeper.push(new HouseKeeper("Akshay", "7 years", "Java"));
houseKeeper.push(new HouseKeeper("Rohit", "7 years", "Java"));
houseKeeper.push(new HouseKeeper("Akash", "7 years", "Java"));
houseKeeper.push(new HouseKeeper("Anand", "7 years", "Java"));
houseKeeper.push(new HouseKeeper("Nikhil", "7 years", "Java"));

console.log(houseKeeper);
