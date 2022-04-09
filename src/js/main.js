// бургер - меню

let burger = document.querySelector(".burger");
let hideMenu = document.querySelector(".hide-menu");
let hideMenuClose = document.querySelector(".hide-menu__close");

burger.addEventListener("click", function(event){
    event.preventDefault();
    hideMenu.classList.add('hide-menu--active');
})

hideMenuClose.addEventListener("click", function(event){
    event.preventDefault();
    hideMenu.classList.remove('hide-menu--active');
})

// секция отзывы
// const findBlockByAlias = alias => {
//     return $(".reviews__item").filter((ndx, item) => {
//         return $(item).attr("data-linked-with") === alias;
//     })
// }
// $(".interactive-avatar__link").click(e => {
//     e.preventDefault();

//     const $this = $(e.currentTarget);
//     const target = $this.attr("data-open");
//     const itemToShow = findBlockByAlias(target);
//     const curItem = $this.closest(".reviews__switcher-item");


//     itemToShow.addClass("active").siblings().removeClass("active");
//     curItem.addClass("interactive-avatar--active").siblings().removeClass("interactive-avatar--active");
// })



// секция отзывы

const commentAvatars = document.querySelector("#commentAvatars");

// функция показа нужного отзыва по имени
const findReview = (reviewName) => {
  // находим текущий отображаемый отзыв (у него должен быть активный класс)
  const activeReview = document.querySelector(".reviews__item.active");
  // снимаем с текущего отображаемого отзыва активный класс
  activeReview.classList.remove("active");
  // находим нужный отзыв по имени (по селектору дата атрибута)
  let currentItem = document.querySelector(`.reviews__item[data-linked-with="${reviewName}"]`);
  // и ставим на него активный класс (фактически показываем нужный отзыв)
  currentItem.classList.add("active");
};
// при кликах на список аватарок
commentAvatars.addEventListener("click", (e) => {
  e.preventDefault();
  // находим по какому именно элементу кликнули
  const target = e.target;
  // если кликнули на картинку
  if (target.classList.contains("interactive-avatar__img")) {
    // ищем текущую активную аватарку
    const activeListItem = document.querySelector(".interactive-avatar--active");
    // если нашли
    if (activeListItem) {
      // убираем с неё активный класс (зеленую рамку)
    activeListItem.classList.remove("interactive-avatar--active");
    }
    // у картинки есть родитель - кнопка
    const button = target.parentElement;
    // а у кнопки есть родитель <li>
    const listElement = button.parentElement;
    // берем у кнопки имя нужного для показа отзыва
    const id = button.getAttribute("data-open");
    // с <li> снимаем активный класс 
    listElement.classList.add("interactive-avatar--active");
    // запускаем функцию показа отзыва и передаем полученное с кнопки имя отзыва 
    findReview(id);
  }
});

hideMenu.addEventListener('click', function (event) {
  event.preventDefault();
  if (event.target.classList.contains('hide-menu__link')) {
    hideMenu.classList.remove('hide-menu--active');
  }
});
