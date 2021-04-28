import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';
describe('Pruebas en el hook useFetchGifs', () => {
   test('debe de retornar el estado inicial', async () => {
      // const { data, loading } = useFetchGifs('tom');
      const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('tom'));
      const { data, loading } = result.current;
      await waitForNextUpdate();
      expect(data).toEqual([]);
      expect(loading).toBeTruthy();
   });

   test('debe de retornar un arreglo de imagenes y loading en false', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('rick'));
      await waitForNextUpdate();
      const { data, loading } = result.current;

      expect(data.length).toBe(10);
      expect(loading).toBeFalsy();
   })


})
