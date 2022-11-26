// Бургер

const burger = document?.querySelector('[data-burger]');
const menu = document?.querySelector('[data-menu]');
const menuItems = menu?.querySelectorAll('a');
burger?.addEventListener('click', ()=>
{
  menu?.classList.toggle('menu--visible');
});
menuItems.forEach(el =>
{
  el.addEventListener('click', ()=>
  {
    menu?.classList.remove('menu--visible');
  });
})

//Свайпер

var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      1: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      599: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      // when window width is >= 480px
      1500: {
        slidesPerView: 3,
        spaceBetween: 20
      },
    }
  });

//Плавный скрол

  $(document).ready(function(){
    $(".header__item,.doar__inner,.projects__inner").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
  
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
  
      //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
      
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500);
    });
  });
