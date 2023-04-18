let popupBg = document.querySelector('.popup-architektoniczne__wrapper'); // Фон попап окна
let popup = document.querySelector('.popup-architektoniczne'); // Само окно
let openPopupButtons = document.querySelectorAll('.otworzyc-arch'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup-button-arch'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});

let popupBg2 = document.querySelector('.popup-techniczne__wrapper'); // Фон попап окна
let openPopupButtons2 = document.querySelectorAll('.otworzyc-tech'); // Кнопки для показа окна
let closePopupButton2 = document.querySelector('.close-popup-button-arch'); // Кнопка для скрытия окна
let popup2 = document.querySelector('.popup-techniczne'); // Само окно

openPopupButtons2.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg2.classList.add('active'); // Добавляем класс 'active' для фона
        popup2.classList.add('active'); // И для самого окна
    })
});

closePopupButton2.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg2.classList.remove('active'); // Убираем активный класс с фона
    popup2.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg2) { // Если цель клика - фот, то:
        popupBg2.classList.remove('active'); // Убираем активный класс с фона
        popup2.classList.remove('active'); // И с окна
    }
});

let popupBg3 = document.querySelector('.popup-przyrodnicze__wrapper'); // Фон попап окна
let openPopupButtons3 = document.querySelectorAll('.otworzyc-przyrod'); // Кнопки для показа окна
let closePopupButton3 = document.querySelector('.close-popup-button-arch'); // Кнопка для скрытия окна
let popup3 = document.querySelector('.popup-przyrodnicze'); // Само окно

openPopupButtons3.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg3.classList.add('active'); // Добавляем класс 'active' для фона
        popup3.classList.add('active'); // И для самого окна
    })
});

closePopupButton3.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg3.classList.remove('active'); // Убираем активный класс с фона
    popup3.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg3) { // Если цель клика - фот, то:
        popupBg3.classList.remove('active'); // Убираем активный класс с фона
        popup3.classList.remove('active'); // И с окна
    }
});

let popupBg4 = document.querySelector('.popup-artystyczne__wrapper'); // Фон попап окна
let openPopupButtons4 = document.querySelectorAll('.otworzyc-art'); // Кнопки для показа окна
let closePopupButton4 = document.querySelector('.close-popup-button-arch'); // Кнопка для скрытия окна
let popup4 = document.querySelector('.popup-artystyczne'); // Само окно

openPopupButtons4.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg4.classList.add('active'); // Добавляем класс 'active' для фона
        popup4.classList.add('active'); // И для самого окна
    })
});

closePopupButton4.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg4.classList.remove('active'); // Убираем активный класс с фона
    popup4.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg4) { // Если цель клика - фот, то:
        popupBg4.classList.remove('active'); // Убираем активный класс с фона
        popup4.classList.remove('active'); // И с окна
    }
});