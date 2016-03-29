require('font-awesome/scss/font-awesome.scss');
require('./styles/app.scss');
require('./lib/server');

import {getRepos} from './lib/github';
import {renderTemplate} from './lib/template';

render();

function render() {
  renderOpenSource();
}

async function renderOpenSource() {
  let repos = getRepos('zzarcon');
  let promises = [];

  for (let repo of repos) {
    promises.push(repo);
  }

  let reposData = [].concat.apply([], await Promise.all(promises));

  const reposHtml = reposData.map(repo => {
    return {
      id: repo.id,
      forks: repo.forks_count,
      createdAt: repo.created_at,
      description: repo.description,
      language: repo.language,
      isForked: repo.fork ? 'is-forked' : '',
      name: repo.name,
      fullName: repo.full_name,
      stars: repo.stargazers_count,
      url: repo.html_url,
      owner: repo.owner
    };
  })
  .sort((a, b) => {
    return a.stars === b.stars ? 0 : (a.stars > b.stars ? 1 : -1);
  })
  .reverse()
  .map(repo => renderTemplate('repository', repo)).join('');

  let element = document.querySelector('#open-source .box-content');
  element.innerHTML = reposHtml;
}