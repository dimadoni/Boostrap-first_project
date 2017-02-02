var d = document,
    navBut = d.getElementById('nav_button'), // кнопка включение меню
    navMenu = d.getElementById('menu'); // выпадающее меню
// функция определения наличия родительского элемента по ID
function hasParent(el, sId){
  while(el) {
    if (el.id == sId) return true;
    el = el.parentNode;
  }
  return false;
}
// по касанию на кнопке, добавляем класс менюшке, 
// который соответствует свойству в css "#menu:hover"
// и разворачиваем меню
navBut.addEventListener('touchstart', function(e) {
  e.preventDefault();
  navMenu.classList.add('open_nav');
}, false);
// по касанию в документе, 
// если событие не было на каком-нибудь элементе меню (определяем с помощью функции "hasParent"),
// убираем класс "open_nav" из меню, что привод к его закрытию
d.addEventListener('touchstart', function(e) {
  if(!hasParent(e.target, 'menu')) navMenu.classList.remove('open_nav');
}, false);