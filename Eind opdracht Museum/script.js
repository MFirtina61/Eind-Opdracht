class App {
  constructor() {
    this.hartjeContainer = document.querySelector(".comments section");
    this.hartje = document.querySelector(".comments section i");
  }
  liken() {
    this.hartjeContainer.classList.toggle("liked");
    console.log(2);
  }
  unliken() {
    this.hartje.addEventListener("click", liken());
    console.log(3);
  }
}
const app = new App();


// class App {
//   constructor() {
//     this.hartjeContainer = document.querySelectorAll(".comments section");
//     this.hartje = document.querySelectorAll(".comments section i");
//   }
//   liken() {
//     tis.hartjeContainer[i].classList.toggle("liked");
//     console.log(2);
//   }
//   unliken() {
//     this.hartje[i].addEventListener("click", liken());
//     console.log(3);
//   }
// }
// const app = new App();


// var hartjeContainer = document.querySelectorAll(".comments section");
// var hartje = document.querySelectorAll(".comments section i");




var hamburgerKnop = document.getElementById("hamburger-knop");


function openMenu() {
  document.body.classList.toggle("menu-open");
}

hamburgerKnop.addEventListener("click", openMenu);
