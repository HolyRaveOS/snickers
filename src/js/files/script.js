// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js'
// Підключення списку активних модулів
import { flsModules } from './modules.js'

// Отримуємо посилання на кнопку "search-form__opnen-btn"
const openBtn = document.querySelector('.search-form__open-btn')

// Отримуємо посилання на елемент "search-form__box"
const searchBox = document.querySelector('.search-form__box')

// Додаємо обробник події при натисканні на кнопку
openBtn.addEventListener('click', function () {
  // Додаємо клас "open-filter" до елементу "search-form__box"
  searchBox.classList.toggle('open-filter')
})

// Додаємо обробник події на документ
document.addEventListener('click', function (event) {
  // Перевіряємо, чи натиснуто поза елементом "search-form__box"
  if (!searchBox.contains(event.target) && !openBtn.contains(event.target)) {
    // Видаляємо клас "open-filter" з елементу "search-form__box"
    searchBox.classList.remove('open-filter')
  }
})

const chooseItems = document.querySelectorAll('.choose__item')

// Add click event listener to each choose__item
chooseItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Remove aria-checked attribute from all choose__checkbox elements
    const checkboxes = document.querySelectorAll('.choose__checkbox')
    checkboxes.forEach((checkbox) => {
      checkbox.removeAttribute('aria-checked')
    })

    // Add aria-checked attribute to the clicked choose__checkbox element
    const checkbox = item.querySelector('.choose__checkbox')
    checkbox.setAttribute('aria-checked', '')
  })
})

if (document.body.classList.contains('product-page-script')) {
  // Функція, яка буде виконуватись при зміні розміру вікна
  function checkWindowSize() {
    // Отримуємо ширину екрану
    var windowWidth = window.innerWidth

    // Отримуємо елемент, на якому потрібно змінити значення атрибуту
    var element = document.getElementById('showmore-list') // Замініть "your-element-id" на фактичний ідентифікатор вашого елемента

    // Перевіряємо ширину екрану та змінюємо значення атрибуту "data-showmore-content"
    if (windowWidth <= 904 && windowWidth > 479) {
      element.setAttribute('data-showmore-content', '3')
    } else if (windowWidth <= 479) element.setAttribute('data-showmore-content', '4')
    else if (windowWidth > 904) {
      element.setAttribute('data-showmore-content', '2')
    }
  }

  // Додаємо обробник події зміни розміру вікна
  window.addEventListener('resize', checkWindowSize)

  // Викликаємо функцію при завантаженні сторінки (якщо потрібно перевірити ширину екрану відразу)
  checkWindowSize()
}
if (document.body.classList.contains('recipes-page-script')) {
  // Функція, яка буде виконуватись при зміні розміру вікна
  function checkWindowSize() {
    // Отримуємо ширину екрану
    var windowWidth = window.innerWidth

    // Отримуємо елемент, на якому потрібно змінити значення атрибуту
    var element = document.getElementById('all-recipes-list') // Замініть "your-element-id" на фактичний ідентифікатор вашого елемента

    // Перевіряємо ширину екрану та змінюємо значення атрибуту "data-showmore-content"
    if (windowWidth <= 1100 && windowWidth > 650) {
      element.setAttribute('data-showmore-content', '3')
    } else if (windowWidth <= 650) element.setAttribute('data-showmore-content', '4')
    else if (windowWidth > 904) {
      element.setAttribute('data-showmore-content', '2')
    }
  }

  // Додаємо обробник події зміни розміру вікна
  window.addEventListener('resize', checkWindowSize)

  // Викликаємо функцію при завантаженні сторінки (якщо потрібно перевірити ширину екрану відразу)
  checkWindowSize()
}

function initMap() {
  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  const styledMapType = new google.maps.StyledMapType([
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry',
      stylers: [
        {
          color: '#f7f1df',
        },
      ],
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [
        {
          color: '#d0e3b4',
        },
      ],
    },
    {
      featureType: 'landscape.natural.terrain',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.business',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.medical',
      elementType: 'geometry',
      stylers: [
        {
          color: '#fbd3da',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#bde6ab',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ffe15f',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#efd151',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: 'black',
        },
      ],
    },
    {
      featureType: 'transit.station.airport',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#cfb2db',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#a2daf2',
        },
      ],
    },
  ])
  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 50.4501, lng: 30.5234 },
    zoom: 11,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map'],
    },
  })

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType)
  map.setMapTypeId('styled_map')
}

window.initMap = initMap
