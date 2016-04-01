import {$, $$} from './utils';

export function addEventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    $$('.close-box', 'click', function() {
      let content = $('.box-content', this.parentElement);
      content.hidden = !content.hidden;
    });
  });
}