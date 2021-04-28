import { getGifs } from "../../helpers/getGifs"


describe('Prueba getGifs', () => {
   test('debe traer 10 elementos', async () => {

      const gifs = await getGifs('tom');

      expect(gifs.length).toBe(10);
   });

   test('debe devolver un error', async () => {
      const gifs = await getGifs('');

      expect(gifs.length).toBe(0);
   })


})