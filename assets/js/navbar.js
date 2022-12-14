// show navbar
const menu = document.querySelector(".navlinks");
const openbtn = document.querySelector("#navopen");
const closebtn = document.querySelector("#navclose");

openbtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    openbtn.style.display= "none";
})


const closeNav = () => {
    menu.style.display = "none";
    closebtn.style.display = "none";
    openbtn.style.display = "inline-block";
}

closebtn.addEventListener('click', closeNav)