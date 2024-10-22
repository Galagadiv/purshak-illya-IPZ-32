document.addEventListener("DOMContentLoaded", function () {
	const currentPage = window.location.pathname.split("/").pop(); // Отримуємо назву поточної сторінки
	const navLinks = document.querySelectorAll(".header-nav-list a");

	let activeLink = null;

	navLinks.forEach((link) => {
		// не працює якщо в посиланні буде починатись з ./
		if (link.getAttribute("href") === currentPage) {
			link.classList.add("active");
			activeLink = link;
		}
		link.addEventListener("mouseenter", () => {
			if (activeLink && activeLink != link) {
				activeLink.classList.add("hover-out");
			}
		});

		link.addEventListener("mouseleave", () => {
			if (activeLink && activeLink != link) {
				activeLink.classList.remove("hover-out");
			}
		});
	});
});
