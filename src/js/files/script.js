// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Отримуємо посилання на кнопку "search-form__opnen-btn"
const openBtn = document.querySelector('.search-form__open-btn');

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


const chooseItems = document.querySelectorAll('.choose__item');

// Add click event listener to each choose__item
chooseItems.forEach(item => {
	item.addEventListener('click', () => {
		// Remove aria-checked attribute from all choose__checkbox elements
		const checkboxes = document.querySelectorAll('.choose__checkbox');
		checkboxes.forEach(checkbox => {
			checkbox.removeAttribute('aria-checked');
		});

		// Add aria-checked attribute to the clicked choose__checkbox element
		const checkbox = item.querySelector('.choose__checkbox');
		checkbox.setAttribute('aria-checked', '');
	});
});


if (document.body.classList.contains('product-page-script')) {
	// Функція, яка буде виконуватись при зміні розміру вікна
	function checkWindowSize() {
		// Отримуємо ширину екрану
		var windowWidth = window.innerWidth;

		// Отримуємо елемент, на якому потрібно змінити значення атрибуту
		var element = document.getElementById("showmore-list"); // Замініть "your-element-id" на фактичний ідентифікатор вашого елемента

		// Перевіряємо ширину екрану та змінюємо значення атрибуту "data-showmore-content"
		if (windowWidth <= 904 && windowWidth > 479) {
			element.setAttribute("data-showmore-content", "3");
		}
		else if (windowWidth <= 479)
			element.setAttribute("data-showmore-content", "4");

		else if (windowWidth > 904) {
			element.setAttribute("data-showmore-content", "2");
		}
	}

	// Додаємо обробник події зміни розміру вікна
	window.addEventListener("resize", checkWindowSize);

	// Викликаємо функцію при завантаженні сторінки (якщо потрібно перевірити ширину екрану відразу)
	checkWindowSize();
}



