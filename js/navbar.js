const hamburger = document.querySelector(".hamburger");
const navbarList = document.querySelector(".navbar__list");

hamburger.addEventListener("click", function() {
	const formContainer = document.querySelector(".form-container");
	if(!hamburger.classList.contains("active")) {
		if(formContainer)
			formContainer.style.zIndex = -1;
		hamburger.classList.add("active");
		navbarList.classList.add("active");
		return;
	}

	if(formContainer)
		formContainer.style.zIndex = 0;
	hamburger.classList.remove("active");
	navbarList.classList.remove("active");
}); 
