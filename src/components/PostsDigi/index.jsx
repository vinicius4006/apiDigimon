import './styles.css';

import { TreinoReactCard } from "../PostCard/TreinoReactCard";


let a = 0;
export const PostsDigi = ({digiList = []}) => (
<div className="digiList">
          {digiList.map((elemento) => (
            <TreinoReactCard 
            key={a++}
            name={elemento.name} 
            img={elemento.img} 
            level={elemento.level}
            />
          ))}
        </div>
);