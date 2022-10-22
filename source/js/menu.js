const initMenu = () => {

  const header = document.querySelector('.header__container');
  const navHeader = document.querySelector('.header__main-nav');
  const navToggle = document.querySelector('.header__nav-toggle');

  header.classList.remove('header__container--nojs');
  navHeader.classList.add('header__main-nav--closed');

  navToggle.addEventListener('click', function () {
    if (navHeader.classList.contains('header__main-nav--closed')) {
      navHeader.classList.remove('header__main-nav--closed');
      navHeader.classList.add('header__main-nav--js-opened');
    } else {
      navHeader.classList.add('header__main-nav--closed');
      navHeader.classList.remove('header__main-nav--js-opened');
    }
  });

  navToggle.addEventListener('click', function () {
    if (navToggle.classList.contains('header__nav-toggle--close')) {
      navToggle.classList.remove('header__nav-toggle--close');
      navToggle.classList.add('header__nav-toggle--open');
    } else {
      navToggle.classList.add('header__nav-toggle--close');
      navToggle.classList.remove('header__nav-toggle--open');
    }
  });
}

export { initMenu };
