require('font-awesome/scss/font-awesome.scss');
require('./styles/app.scss');
require('./lib/server');

import {getRepos} from './lib/github';

render();

function render() {
  renderOpenSource();
}

async function renderOpenSource() {
  let repos = getRepos('zzarcon');
  let reposData = [];

  for (let repo of repos) {
    let result = await repo;
    if (!result) break;

    reposData = reposData.concat(result);
  }

  reposData = reposData.map(repo => {
    return {
      id: repo.id,
      forks: repo.forks_count,
      createdAt: repo.created_at,
      description: repo.description,
      language: repo.language,
      isForked: repo.fork,
      name: repo.name,
      fullName: repo.full_name,
      stars: repo.stargazers_count,
      url: repo.url,
      owner: repo.owner
    };
  }).sort((a, b) => {
    return a.stars === b.stars ? 0 : (a.stars > b.stars ? 1 : -1);
  }).reverse();
}