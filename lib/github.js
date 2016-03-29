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
          done: this.currentPage > 3,
          value
        }
      }
    })
  }
}

function* worker(params, thenCB) {
  p1Promise.then((results) => {
    arr.push(results)
  })
  p2Promise.then((results) => {
    arr.push(results)
  })

  const promises = [ p1, p2 ];

  const thenCB = (results) => { arr.push(results)};
  const thenMapped = promises.map((p) => p.then(thenCB); );

  promises.forEach((p) => {
    const newPromise = p.then(thenCB);
  })

  // [ p1.then(thenCB), p2.then(thenCB) ]
  let currentResult = Promise.all([p1Promise, p2Promise]).then(results => yield results);
}

function* getRepos2(username, params = {}, pages=3, sameTime=2) {
  let i = 0;


  //let currentResult = Promise.all(p1Promise, p2Promise).then(results => yield results);

  yield* worker({ pages, sameTime });

  fetch(url).then((r) => yield r.json());

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