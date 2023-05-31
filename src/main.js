import './style.scss';

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