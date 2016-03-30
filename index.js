require('font-awesome/scss/font-awesome.scss');
require('./styles/app.scss');
require('./lib/server');

//TODO: Require parse as parseEmojis
import {parse} from 'gh-emoji';
import {timeAgo} from './lib/utils';
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

  let reposHtml = reposData
  .map(pluckRepo)
  .sort((a, b) => {
    return a.stars === b.stars ? 0 : (a.stars > b.stars ? 1 : -1);
  })
  .reverse()
  .map(repo => renderTemplate('repository', repo))
  .join('');

  reposHtml = await parse(reposHtml);

  let element = document.querySelector('#open-source .box-content');
  element.innerHTML = reposHtml;
}

function pluckRepo(repo) {
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
    updatedAt: repo.updated_at,
    pushedAt: timeAgo(new Date(repo.pushed_at)),
    owner: repo.owner
  };
}