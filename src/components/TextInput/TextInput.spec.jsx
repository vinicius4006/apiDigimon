import { render, screen } from '@testing-library/react';
import { type } from '@testing-library/user-event/dist/type';
import { TextInput } from '.';


describe('<TextInput />', () => {
    it('should have a value of searchValue', () => {     
      const fn = jest.fn(); // essa função está aqui só pra ver se foi chamada
       render(<TextInput handleChange={fn} searchValue={'testando'} />);


       const input = screen.getByPlaceholderText(/Type your Digimon/i);
       expect(input.value).toBe('testando');
    });

    it('should call handleChange function on each key pressed', () => {     
      const fn = jest.fn(); // essa função está aqui só pra ver se foi chamada
       render(<TextInput handleChange={fn} />);

       const input = screen.getByPlaceholderText(/Type your Digimon/i);

       const value = 'o valor';

        type(input, value);
        expect(input.value).toBe(value);
        expect(fn).toHaveBeenCalledTimes(value.length);

    });

    it('should match snapshot', () => {     
      const fn = jest.fn(); // essa função está aqui só pra ver se foi chamada
       
     const {container} = render(<TextInput handleChange={fn} />);
    expect(container).toMatchSnapshot();
       

    });

   
});