require('font-awesome/scss/font-awesome.scss');
require('./styles/app.scss');
require('./lib/server');

import {parseEmojis} from 'gh-emoji';
import {timeAgo, $, $$} from './lib/utils';
import {addEventListeners} from './lib/ui';
import {getRepos} from './lib/github';
import {renderTemplate} from './lib/template';
import articles from './static/articles';
import companies from './static/companies';

addEventListeners();
document.addEventListener("DOMContentLoaded", render);

function render() {
  renderOpenSource();
  renderArticles();
  renderCompanies();
}

async function renderOpenSource() {
  let repos = getRepos('zzarcon');
  let promises = [];

  for (let repo of repos) {
    promises.push(repo);
  }

  let reposData = [].concat.apply([], await Promise.all(promises));

  reposData = reposData
  .map(pluckRepo)
  .sort((a, b) => {
    return a.stars === b.stars ? 0 : (a.stars > b.stars ? 1 : -1);
  })
  .reverse();

  renderStats(reposData);

  let reposHtml = reposData
  .map(repo => renderTemplate('repository', repo))
  .join('');

  $('#open-source .box-content').innerHTML = await parseEmojis(reposHtml);
}

function renderArticles() {
  let articlesHtml = articles
  .map((article) => renderTemplate('article', article))
  .join('');

  $('#articles .box-content').innerHTML = articlesHtml;
}

function renderCompanies() {
  let companiesHtml = companies
  .map((company) => renderTemplate('company', company))
  .join('');

  $('#companies .box-content').innerHTML = companiesHtml; 
}

function renderStats(repos) {
  const stats = repos.reduce((current, next, i) => {
    current.stars += next.stars;
    current.forks += next.forks;
    current.repoCount = i;

    return current;
  }, {stars: 0, forks: 0, repoCount: 0});

  $('#open-source-stats').innerHTML = renderTemplate('repoStats', stats);
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