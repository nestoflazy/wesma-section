import './style.scss';

// const obj = [{
//     title: 'Интернет-магазин ковров',
//     img: '',
//     people: 3945,
//     request: 3412,
//     average: 17,
//     price: 68000,
//     traficIncrease: 0,
//     pricePerRequest: 81,
// }]

let buttonsTabMenu = document.querySelectorAll('.tab-input');
let sectionTabContent = document.querySelectorAll('.tab-content');

let activeTabId = 0; // активный элемент секции
sectionTabContent[activeTabId].classList.add('visible'); // отображение нулевого элемента по умолчанию

for (let i = 0; i < buttonsTabMenu.length; i++) {
    buttonsTabMenu[i].addEventListener('click', () => {       
        sectionTabContent[activeTabId].classList.remove('visible');        
        activeTabId = i;       
        sectionTabContent[activeTabId].classList.add('visible');
    })
}