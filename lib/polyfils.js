const fetchPolyfil = (endpoint) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status !== 200) {
          return reject(xhr.responseText);
        }

        return resolve({ json: () => JSON.parse(xhr.responseText) });
      }
    };

    xhr.open('GET', endpoint, true);
    xhr.send();
  });
};

window.fetch = window.fetch || fetchPolyfil;