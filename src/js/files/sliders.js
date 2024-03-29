/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Pagination, Scrollbar } from 'swiper'
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import '../../scss/base/swiper.scss'
// Повний набір стилів з scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
//import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector('.hero__cards')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper('.hero__cards', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 50,
      // autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація

      pagination: {
        el: '.hero__cards-pagination',
        clickable: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      // navigation: {
      // 	prevEl: '.swiper-button-prev',
      // 	nextEl: '.swiper-button-next',
      // },
      /*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // Події
      on: {},
    })
  }

  //======================================================================

  if (document.querySelector('.hit__cards')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper('.hit__cards', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Scrollbar],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      // autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація

      // pagination: {
      // 	el: '.hit__card-pagination',
      // 	clickable: true,
      // },

      // Скроллбар

      scrollbar: {
        el: '.scrollbar',
        draggable: true,
      },

      // Кнопки "вліво/вправо"
      // navigation: {
      // 	prevEl: '.swiper-button-prev',
      // 	nextEl: '.swiper-button-next',
      // },

      // Брейкпоінти
      // breakpoints: {
      // 	320: {
      // 		spaceBetween: 20,
      // 	},
      // 	480: {
      // 		spaceBetween: 0,
      // 	},
      // 	640: {
      // 		spaceBetween: 0,
      // 	},
      // 	768: {
      // 		spaceBetween: 0,
      // 	},
      // 	992: {
      // 		spaceBetween: 0,
      // 	},
      // 	1268: {
      // 		spaceBetween: 0,
      // 	},
      // },

      // Події
      on: {},
    })
  }

  //=====================================================================

  if (document.querySelector('.special__wrapper')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper('.special__wrapper', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Scrollbar],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      // autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація

      // pagination: {
      // 	el: '.hit__card-pagination',
      // 	clickable: true,
      // },

      // Скроллбар

      scrollbar: {
        el: '.scrollbar',
        draggable: true,
      },

      // Кнопки "вліво/вправо"
      // navigation: {
      // 	prevEl: '.swiper-button-prev',
      // 	nextEl: '.swiper-button-next',
      // },

      // Брейкпоінти
      // breakpoints: {
      // 	320: {
      // 		spaceBetween: 20,
      // 	},
      // 	480: {
      // 		spaceBetween: 0,
      // 	},
      // 	640: {
      // 		spaceBetween: 0,
      // 	},
      // 	768: {
      // 		spaceBetween: 0,
      // 	},
      // 	992: {
      // 		spaceBetween: 0,
      // 	},
      // 	1268: {
      // 		spaceBetween: 0,
      // 	},
      // },

      // Події
      on: {},
    })
  }
  //===========================================================================

  if (document.querySelector('.instagram__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper('.instagram__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Scrollbar],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      // autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація

      // pagination: {
      // 	el: '.hit__card-pagination',
      // 	clickable: true,
      // },

      // Скроллбар

      scrollbar: {
        el: '.scrollbar',
        draggable: true,
      },

      // Кнопки "вліво/вправо"
      // navigation: {
      // 	prevEl: '.swiper-button-prev',
      // 	nextEl: '.swiper-button-next',
      // },

      // Брейкпоінти
      // breakpoints: {
      // 	320: {
      // 		spaceBetween: 20,
      // 	},
      // 	480: {
      // 		spaceBetween: 20,
      // 	},
      // 	640: {
      // 		spaceBetween: 20,
      // 	},
      // 	768: {
      // 		spaceBetween: 20,
      // 	},
      // 	992: {
      // 		spaceBetween: 20,
      // 	},
      // 	1268: {
      // 		spaceBetween: 20,
      // 	},
      // },

      // Події
      on: {},
    })
  }
  if (document.querySelector('.similar-product__wrapper')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper('.similar-product__wrapper', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Scrollbar],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      // autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація

      // pagination: {
      // 	el: '.hit__card-pagination',
      // 	clickable: true,
      // },

      // Скроллбар

      scrollbar: {
        el: '.scrollbar',
        draggable: true,
      },

      // Кнопки "вліво/вправо"
      // navigation: {
      // 	prevEl: '.swiper-button-prev',
      // 	nextEl: '.swiper-button-next',
      // },

      // Брейкпоінти
      // breakpoints: {
      // 	320: {
      // 		spaceBetween: 20,
      // 	},
      // 	480: {
      // 		spaceBetween: 20,
      // 	},
      // 	640: {
      // 		spaceBetween: 20,
      // 	},
      // 	768: {
      // 		spaceBetween: 20,
      // 	},
      // 	992: {
      // 		spaceBetween: 20,
      // 	},
      // 	1268: {
      // 		spaceBetween: 20,
      // 	},
      // },

      // Події
      on: {},
    })
  }
  if (document.querySelector('.more-recipes__wrapper')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper('.more-recipes__wrapper', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Scrollbar],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      // autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація

      // pagination: {
      // 	el: '.hit__card-pagination',
      // 	clickable: true,
      // },

      // Скроллбар

      scrollbar: {
        el: '.scrollbar',
        draggable: true,
      },

      // Кнопки "вліво/вправо"
      // navigation: {
      // 	prevEl: '.swiper-button-prev',
      // 	nextEl: '.swiper-button-next',
      // },

      // Брейкпоінти
      // breakpoints: {
      // 	320: {
      // 		spaceBetween: 20,
      // 	},
      // 	480: {
      // 		spaceBetween: 0,
      // 	},
      // 	640: {
      // 		spaceBetween: 0,
      // 	},
      // 	768: {
      // 		spaceBetween: 0,
      // 	},
      // 	992: {
      // 		spaceBetween: 0,
      // 	},
      // 	1268: {
      // 		spaceBetween: 0,
      // 	},
      // },

      // Події
      on: {},
    })
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll')
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index]
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar')
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      })
      sliderScroll.scrollbar.updateSize()
    }
  }
}

window.addEventListener('load', function (e) {
  // Запуск ініціалізації слайдерів
  initSliders()
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
})
