import repoTemplate from '../templates/repository.html';

const BRACKETS_REGEX = /(\{\{[\w\.]*\}\})/g;
const templates = {
  repository: repoTemplate
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