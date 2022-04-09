// let list = document.getElementById("teamList");

// const buttons = document.querySelectorAll('.team__name');

// function closeEveryItem() {
//     for (let i = 0; i < buttons.length; i++) {
//         const button = buttons[i];
//         const description = button.nextElementSibling;
//         description.classList.remove('team__desc--active');
//         button.classList.remove('team__name--active');

//     }
// }

// list.addEventListener("click", function (event) {
//     event.preventDefault();

//     const target = event.target;
//     if (target.classList.contains("team__name")) {
//         const description = target.nextElementSibling;

//         if (description.classList.contains('team__desc--active')) {
//             closeEveryItem();
//         } else {
//             closeEveryItem();
//             description.classList.add('team__desc--active');
//             target.classList.add('team__name--active');
//         }
//     }
// }) 

// for (let index = 0; index < buttons.length; index++) {
//     const button = buttons[index];

//     button.addEventListener('click', function (event) {
//         event.preventDefault();
//         const target = event.target;
//         const description = target.nextElementSibling;

//         if (description.classList.contains('team__desc--active')) {
//             description.classList.remove('team__desc--active');
//         } else {
//             closeEveryItem();
//             description.classList.add('team__desc--active');
//         }

//     })
// }

const openItem = item => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content-block"); 
    const reqHeight = textBlock.height();
    const svgIcon = container.find(".team__icon-img");
  
    container.addClass("active");
    svgIcon.addClass("team__icon-img--active");
    contentBlock.height(reqHeight);
  }
  
  const closeEveryItem = container => {
    const items = container.find(".team__content");
    const itemContainer = container.find(".team__item");
    const itemSvgIcon = container.find(".team__icon-img");
  
    itemContainer.removeClass("active");
    itemSvgIcon.removeClass("team__icon-img--active");
    items.height(0);
  }
  
  $(".team__button").click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest(".team__list");
    const elemContainer = $this.closest(".team__item");
  
    if (elemContainer.hasClass("active")) {
      closeEveryItem(container);
    } else {
      closeEveryItem(container);
      openItem($this);
    }
  });
