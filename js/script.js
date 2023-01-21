"use strict";

const searchHeader = document.querySelector('[data-searchHeader]'),
      addSearchPartners = document.querySelector('[data-searchPartners'),
      mediaQuery = window.matchMedia("(max-width: 767px)"),
      search = document.createElement('div');

function createNewSearch() {
//Скрытие блока поиска в header
searchHeader.style.display = 'none';
//Создание нового блока поиска
search.innerHTML = `
<img src="img/Search.png" alt="search" class="search__img">
<input type="text" class="search__input" placeholder="Найти...">
`;
//Добавление класса
search.classList.add('searchDown');
//Пушим в верстку
addSearchPartners.prepend(search);
}

function removeNewSearch() {
//Появление старого блока в header
searchHeader.style.display = 'flex';
//Удаление созданного блока
search.remove();
}

//Слушатель на достужение ширины
mediaQuery.addListener(function(e) {
if(e.matches) {
    createNewSearch();
} else {
    removeNewSearch();
}
});