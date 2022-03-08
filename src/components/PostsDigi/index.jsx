import { TreinoReactCard } from "../PostCard/TreinoReactCard";
let a = 0;
export const PostsDigi = ({digiList}) => (
<div className="digiList grid lg:grid-cols-6 gap-6">
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