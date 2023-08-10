const hamburger = document.querySelector(".hamburger");
const navbarList = document.querySelector(".navbar__list");

hamburger.addEventListener("click", function() {
	hamburger.classList.toggle("active");
	navbarList.classList.toggle("active");
}); 
