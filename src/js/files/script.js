// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Отримуємо посилання на кнопку "search-form__opnen-btn"
const openBtn = document.querySelector('.search-form__opnen-btn');

// Отримуємо посилання на елемент "search-form__box"
const searchBox = document.querySelector('.search-form__box');

// Додаємо обробник події при натисканні на кнопку
openBtn.addEventListener('click', function () {
	// Додаємо клас "open-filter" до елементу "search-form__box"
	searchBox.classList.toggle('open-filter');
});

// Додаємо обробник події на документ
document.addEventListener('click', function (event) {
	// Перевіряємо, чи натиснуто поза елементом "search-form__box"
	if (!searchBox.contains(event.target) && !openBtn.contains(event.target)) {
		// Видаляємо клас "open-filter" з елементу "search-form__box"
		searchBox.classList.remove('open-filter');
	}
});




