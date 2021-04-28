import React from 'react'
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory"


describe('Pruebas en <AddCategory />', () => {
   const setCategories = jest.fn();
   let wrapper;

   beforeEach(() => {
      wrapper = shallow(<AddCategory setCategories={setCategories} />);
      jest.clearAllMocks();
   })
   test('debe mostrarse correctamente', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('debe cambiar la caja de texto', () => {
      const input = wrapper.find('input');
      const value = "Hola";
      input.simulate('change', { target: { value } }); //se envia el objeto que recibiria e.target.value
   })

   test('no debe de postear la informacion onSubmit', () => {
      wrapper.find('form').simulate('submit', { preventDefault() { } });

      expect(setCategories).not.toHaveBeenCalled();
   });

   test('debe de llamar el setCategories y limpiar la caja de texto', () => {

      const input = wrapper.find('input');
      const value = "Tom";
      input.simulate('change', { target: { value } });

      wrapper.find('form').simulate('submit', { preventDefault() { } });

      expect(setCategories).toHaveBeenCalled();
      expect(setCategories).toHaveBeenCalledTimes(1);
      expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //que la funcion se halla llamado con una funcion como parametro

      expect(input.prop('value')).toBe('');

   });
})