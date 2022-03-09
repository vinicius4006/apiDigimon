import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
    it('should render the button with the text "LOAD MORE +" ', () => {
        render(<Button text="Load More +"/>);
        expect.assertions(1);


        const button = screen.getByRole('button', { name: /load more +/i });
        expect(button).toHaveAttribute('class', 'btn btn-transition btn-styles');
    });
});