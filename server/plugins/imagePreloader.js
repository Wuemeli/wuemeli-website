export default function ({ app }, inject) {
  if (process.client) {
    const images = [
      'https://stats.dooboo.io/api/github-stats?login=wuemeli',
      'https://github-readme-streak-stats.herokuapp.com/?user=Wuemeli&theme=radical&border=false',
      'https://dcbadge.vercel.app/api/shield/704918773035171931?theme=gray&logoColor=presence',
      'https://github-readme-stats.vercel.app/api/wakatime?username=wuemeli&theme=radical',
    ];

    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    inject('imagePreloader', images);
  }
}
