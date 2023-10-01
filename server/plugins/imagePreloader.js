export default function ({ app }, inject) {
  if (process.client) {
    const images = [
      'https://github-readme-stats.vercel.app/api?username=wuemeli&show_icons=true&theme=radical&border=false',
      'https://github-readme-streak-stats.herokuapp.com/?user=Wuemeli&theme=radical&border=false',
      'https://dcbadge.vercel.app/api/shield/704918773035171931?theme=gray&logoColor=presence',
      'https://github-readme-stats.vercel.app/api/wakatime?username=wuemeli&theme=radical',
      'https://spotify-github-profile.vercel.app/api/view?uid=d1ytrh3gx9xa7mzw79h2mbeqi&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false'
    ];

    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    inject('imagePreloader', images);
  }
}
