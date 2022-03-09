import { render, screen } from "@testing-library/react";
import { postCardPropsMock } from "./mock";
import { TreinoReactCard } from "./TreinoReactCard";

const props = postCardPropsMock;

describe('<TreinoReactCard />', () => {
    it('should render PostsCard correctly', () => {
      render(<TreinoReactCard {...props}/>)

      expect(screen.getByRole('img', { name: /nameDigimon/i}))
      .toHaveAttribute('src', 'img/digimon.png');
      
     expect(screen.getByRole('heading', { name: /nameDigimon/i }))
     .toBeInTheDocument();

     expect(screen.getByText('levelDigimon')).toBeInTheDocument();
    })
});

//Debug funciona como o console.log()

//Precisamos saber se a imagem está correta e o alt também

//Como não temos um específico para parágrafo, é necessário usar o getByText