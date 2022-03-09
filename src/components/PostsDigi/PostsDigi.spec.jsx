import { render, screen } from '@testing-library/react';
import { PostsDigi } from '.';

const props = {
    
    digiList: [
        {
            
            name: 'nameDigimon',
            img: 'img/digimon.png',
            level: 'levelDigimon',
        },
        {
            
            name: 'nameDigimon 2',
            img: 'img/digimon2.png',
            level: 'levelDigimon 2',
        },
        {
            
            name: 'nameDigimon 3',
            img: 'img/digimon3.png',
            level: 'levelDigimon 3',
        },
    ]

};

describe('<PostsDigi />', () => {
    it('should render posts', () => {
        render(<PostsDigi {...props}/>)


        expect(screen.getAllByRole('heading', { name: /nameDigimon/i }))
            .toHaveLength(3);

        expect(screen.getAllByRole('img', { name: /nameDigimon/i }))
            .toHaveLength(3);

        expect(screen.getAllByText(/levelDigimon/i))
            .toHaveLength(3);

        expect(screen.getByRole('img', { name: /nameDigimon 3/i }))
            .toHaveAttribute('src', 'img/digimon3.png');


    });

    it('should match snapshot', () => {
        const {container} = render(<PostsDigi {...props}/>)

        expect(container.firstChild).toMatchSnapshot();
        

    });

    it('should not render posts', () => {
        render(<PostsDigi/>)

        expect(screen.queryByRole('heading', { name: /nameDigimon/i }))
            .not.toBeInTheDocument();
        

    });
});