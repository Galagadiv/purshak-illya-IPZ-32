document.addEventListener("DOMContentLoaded", function () {
	const currentPage = window.location.pathname.split("/").pop(); // Отримуємо назву поточної сторінки
	const navLinks = document.querySelectorAll(".header__nav-list__item__link");

	let activeLink = null;

	navLinks.forEach((link) => {
		// Не працює, якщо в посиланні буде починатись з ./
		if (link.getAttribute("href") === currentPage) {
			link.classList.add("header__nav-list__item__link--active");
			activeLink = link;
		}
	});
});
