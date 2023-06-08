let x = document.querySelector(".topnav");

function toggleMenu() {
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
