const apiHost = 'https://api.github.com'

export function getRepos(username, params = {}) {
  const defaultParams = {
    page: 1,
    sort: 'created',
    type: 'owner',
    direction: 'desc'
  };  

  return {
    [Symbol.iterator]: () => ({
      currentPage: 1,
      next() {
        const params = Object.assign(defaultParams, {page: this.currentPage});
        const url = createUrl(`users/${username}/repos`, params);
        let value = fetch(url).then((r) => r.json());

        this.currentPage++;

        return {
          done: this.currentPage > 4,
          value
        }
      }
    })
  }
}

function createUrl(enpoint, params) {
  const query = createQueryParams(params);

  return `${apiHost}/${enpoint}?${query}`;
}

function createQueryParams(params) {
  return Object.keys(params).reduce((prev, current) => {
    prev.push(`${current}=${params[current]}`);
    return prev;
  }, []).join('&');
}