import repository from '../templates/repository.html';
import repoStats from '../templates/repo-stats.html';
import article from '../templates/article.html';

const BRACKETS_REGEX = /(\{\{[\w\.]*\}\})/g;
const templates = {
  article,
  repository,
  repoStats
};

export function renderTemplate(templateName, context) {
  const template = templates[templateName];
  let html = '';

  html += template.replace(BRACKETS_REGEX, (match, text, offset, string) => {
    let key = match.replace(/{{/, '').replace('}}', '');

    return context[key];
  });

  return html;
}