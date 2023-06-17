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

function initMap() {
  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  const styledMapType = new google.maps.StyledMapType(
    [
      { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#c9b2a6' }],
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#dcd2be' }],
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#ae9e90' }],
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{ color: '#dfd2ae' }],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#dfd2ae' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#93817c' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [{ color: '#a5b076' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#447530' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#f5f1e6' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{ color: '#fdfcf8' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#f8c967' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#e9bc62' }],
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [{ color: '#e98d58' }],
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#db8555' }],
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#806b63' }],
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{ color: '#dfd2ae' }],
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#8f7d77' }],
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#ebe3cd' }],
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{ color: '#dfd2ae' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{ color: '#b9d3c2' }],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#92998d' }],
      },
    ],
    { name: 'Styled Map' },
  )
  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 50.4501, lng: 30.5234 },
    zoom: 8,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map'],
    },
  })

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType)
  map.setMapTypeId('styled_map')
}

window.initMap = initMap
