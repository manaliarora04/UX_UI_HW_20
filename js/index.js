console.log("Your index.js file is loaded correctly!");

function imageHovered(imgObj) {
    imgObj.style.transform = 'scale(1.1)'; 
    imgObj.style.transition = 'all 1000ms'; 
}

function imageUnhovered(imgObj) {
    imgObj.style.transform = 'scale(1)';
}


const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburgerIcon= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".hamburger");

function toggleMenu() {
  
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    hamburgerIcon.style.display = "none";
  }
}

hamburgerIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);

// menuItems.forEach( 
//   function(menuItem) { 
//     menuItem.addEventListener("click", toggleMenu);
  
