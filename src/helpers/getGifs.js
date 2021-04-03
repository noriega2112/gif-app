export const getGifs = async (category) => {
   const API_KEY = 'YOXemyF1o8HAMv9egtf5wqs3mrMynaQL';
   const LIMIT = 10;
   const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${LIMIT}&q=${encodeURI(category)}`;

   const resp = await fetch(URL);
   const { data } = await resp.json();

   const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
   }))

   return gifs;
}