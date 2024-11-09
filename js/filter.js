const filterButton = document.querySelectorAll(
	".portfolio__filter__item__button"
);
const filterableCard = document.querySelectorAll(".portfolio__list__item");

// Функція для фільтрації карток
const filterCard = (e) => {
	// Видаляємо клас "active" з попередньої кнопки
	document
		.querySelector(".portfolio__filter__item__button.active")
		?.classList.remove("active");

	// Додаємо клас "active" до натиснутої кнопки
	e.target.classList.add("active");

	// Перебираємо всі картки і перевіряємо, чи треба їх показати
	filterableCard.forEach((card) => {
		card.classList.add("hide"); // Спочатку приховуємо всі картки

		// Перевіряємо, чи категорія картки відповідає вибраному фільтру
		if (
			card.dataset.name === e.target.dataset.name ||
			e.target.dataset.name === "all"
		) {
			card.classList.remove("hide"); // Якщо категорія збігається або вибрано "Усі", показуємо картку
		}
	});
};

// Додаємо обробник події на кожну кнопку фільтра
filterButton.forEach((button) => {
	button.addEventListener("click", filterCard);
});
