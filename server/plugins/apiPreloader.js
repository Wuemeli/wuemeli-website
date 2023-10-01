export default function ({ app }, inject) {
  if (process.client) {
    const apiUrl = 'https://api.github.com/users/wuemeli/repos';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        inject('apiPreloader', data);
      });
  }
}
