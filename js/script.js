"use strict";

const searchHeader = document.querySelector('[data-searchHeader'),
      addSearchPartners = document.querySelector('[data-searchPartners'),
      windowWidth = window.innerWidth,
      mediaQuery = window.matchMedia("(max-width: 768px)"),
      search = document.createElement('div');

// Создание элемента
function createNewSearch() {
    //Скрытие блока поиска в header
    searchHeader.style.display = 'none';
    //Создание нового блока поиска
    search.innerHTML = `
    <img src="img/Search.png" alt="search" class="search__img">
    <input type="text" class="search__input" placeholder="Найти...">
    `;
    //Добавление класса
    search.classList.add('search');
    //Пушим в верстку
    addSearchPartners.append(search);
}

// Удаление элемента
function removeNewSearch() {
    //Появление старого блока в header
    searchHeader.style.display = 'flex';
    //Удаление созданного блока
    search.remove();
}


//Проверка первоначального положения ширины экрана
function changeSearch() {
    if (windowWidth < 768) {
        createNewSearch();
    } else if(windowWidth >= 768){
        removeNewSearch();
    }
}
changeSearch();

//Изменение структуры при изменении ширины
mediaQuery.addEventListener('change', function(e) {
    if(e.matches) {
        createNewSearch();
    } else {
        removeNewSearch();
    }
});