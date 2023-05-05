
// For detecting button click
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    makeSound(this.innerHTML)
    buttonAnimation(this.innerHTML)
  });
});

// for detecting key strokes
let keystrokes = document.addEventListener("keypress", function (event) {
  makeSound(event.key)
  buttonAnimation(event.key)

})


// This fuction will take a event as an input and check if 
// the requied key is being pressed and will play the required sound
function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3")
        tom1.play()
        break;
      
        case "a":
          let tom2 = new Audio("sounds/tom-2.mp3")
          tom2.play()
          break;

        case "s":
          let tom3 = new Audio("sounds/tom-3.mp3")
          tom3.play()
          break;
        
        case "d":
          let tom4 = new Audio("sounds/tom-4.mp3")
          tom4.play()
          break;

        case "j":
          let snare = new Audio("sounds/snare.mp3")
          snare.play()
          break;

        case "k":
          let crash = new Audio("sounds/crash.mp3")
          crash.play()
          break;

        case "l":
          let kick = new Audio("sounds/kick-bass.mp3")
          kick.play()
          break;

      default:
        break;
    }
}

function buttonAnimation(currentKey) {
  let activeBtn = document.querySelector("." + currentKey)
  activeBtn.classList.add("pressed")
  setTimeout(function() {
    activeBtn.classList.remove("pressed")
  }, 100)
}