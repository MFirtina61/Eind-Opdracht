var hartjeContainer = document.querySelector('.comments section');
var hartje = document.querySelector('.comments section i');
console.log(1);

function liken() {
    hartjeContainer.classList.toggle('liked')
    console.log(2)
}
hartje.addEventListener("click", liken);
console.log(3);