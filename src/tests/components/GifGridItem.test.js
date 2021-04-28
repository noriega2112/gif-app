import React from 'react'
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

   const title = "Un titulo";
   const url = "http://prueba.com/algo.jpg";
   let wrapper = shallow(<GifGridItem title={title} url={url} />);

   beforeEach(() => {
      wrapper = shallow(<GifGridItem title={title} url={url} />);
   });

   test('debe de mostrar <GifGridItem /> correctamente', () => {
      expect(wrapper).toMatchSnapshot();
   });
   test('debe de tener un parrafo con el title', () => {
      const p = wrapper.find('p');
      expect(p.text().trim()).toBe(title);
   });
   test('debe de tener la imagen igual al url y alt de los props', () => {
      const img = wrapper.find('img');
      // const { imgUrl, altText } = img.props('src');
      expect(img.prop('src')).toBe(url);
      expect(img.prop('alt')).toBe(title);
   });
   test('debe tener la clase fadeIn', () => {
      const div = wrapper.find('div');
      expect(div.hasClass('animate__fadeIn')).toBe(true);
   });
});
