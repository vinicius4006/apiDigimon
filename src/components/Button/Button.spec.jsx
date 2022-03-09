import { render, screen } from '@testing-library/react';
import { click } from '@testing-library/user-event/dist/click';
import { Button } from '.';

describe('<Button />', () => {
    it('should render the button with the text "LOAD MORE +" ', () => {
        render(<Button text="Load More +"/>);
        expect.assertions(1);


        const button = screen.getByRole('button', { name: /load more +/i });
        expect(button).toHaveAttribute('class', 'btn btn-transition btn-styles');
    });

    it('should call function on button click', () => {

        const fn = jest.fn();
        render(<Button text="Load More +" loadMoreDigi={fn} />);

        const button = screen.getByRole('button', { name: /load more +/i });

        click(button);
        //fireEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should be disabled when disabled is true', () => {

        render(<Button text="Load More +" notMoreDigi={true} />);

        const button = screen.getByRole('button', { name: /load more +/i });

        expect(button).toBeDisabled();
    });

    it('should be enabled when disabled is false', () => {

        render(<Button text="Load More +" notMoreDigi={false} />);

        const button = screen.getByRole('button', { name: /load more +/i });

        expect(button).toBeEnabled();
    });
});