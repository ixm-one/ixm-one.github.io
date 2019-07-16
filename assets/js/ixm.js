let current = 0;

function register (id, fn) {
  document.getElementById(id).addEventListener('click', fn);
}

function next () { switchTo(current += 1); }
function prev () { switchTo(current -= 1); }

function setTheme () {
  let html = document.documentElement;
  if (html.dataset['theme']) { delete html.dataset['theme']; }
  else { html.dataset['theme'] = 'dark'; }
}

function switchTo(idx) {
  const slideSelector = 'main > ul > li';
  let slides = Array.from(document.querySelectorAll(slideSelector));
  if (idx < 0) { current = slides.length - 1; }
  else if (idx >= slides.length) { current = 0; }
  else { current = idx; }
  const hide = (element) => { delete element.dataset['visible']; };
  const show = (element) => { element.dataset['visible'] = true; };
  slides.forEach(hide);
  show(slides[current]);
}

register('dark-mode', setTheme);
register('prev', prev);
register('next', next);