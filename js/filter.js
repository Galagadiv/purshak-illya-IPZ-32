// Отримуємо всі кнопки фільтрації та елементи списку портфоліо
const filterButtons = document.querySelectorAll(
	".portfolio__filter__item__button"
);
const portfolioItems = document.querySelectorAll(".portfolio__list__item");

// Додаємо обробник подій для кожної кнопки фільтрації
filterButtons.forEach((button) => {
	button.addEventListener("click", () => {
		// Отримуємо значення data-name кнопки, по якій клікнули
		const filterCategory = button.getAttribute("data-name");

		// Перевіряємо кожен елемент портфоліо
		portfolioItems.forEach((item) => {
			const itemCategory = item.getAttribute("data-name");

			// Показуємо або ховаємо елемент залежно від категорії фільтра
			if (filterCategory === "all" || itemCategory === filterCategory) {
				item.classList.add("portfolio__list__item");
				item.style.display = "block";
			} else {
				item.classList.remove("portfolio__list__item");
				item.style.display = "none";
			}
		});
	});
});
