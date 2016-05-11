import {$, $$} from './utils';

let activeSection = null;

export function addEventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    $$('.close-box', 'click', onCloseClick);
    $$('.menu-item', 'click', onMenuitemClick);
    $$('.show-more', 'click', onShowMoreClick);
    window.addEventListener('scroll', onScroll, true);
  });
}

function onScroll(e) {
  const links = [getTop('bio'), getTop('open-source'), getTop('articles'), getTop('companies'), getTop('projects')];
  const currentIndex = links.reduce((prev, current, i) => {
    return current < 20 && current < prev ? i : prev;
  }, 0);

  if (currentIndex !== activeSection) {
    activeSection = currentIndex;
    let menu = $('#scroll-wrapper ul');
    $('.active', menu).classList.remove('active');
    menu.children[activeSection].classList.add('active');
  }
}

function getTop(id) {
  return document.getElementById(id).getBoundingClientRect().top;
}

function onCloseClick() {
  let content = $('.box-content', this.parentElement);
  content.hidden = !content.hidden;
}

function onMenuitemClick() {
  const link = this.getAttribute('data-link');
  let element = document.getElementById(link);

  location.href = `#${link}`;
}

function onShowMoreClick() {
  this.parentElement.classList.add('overflow');
}