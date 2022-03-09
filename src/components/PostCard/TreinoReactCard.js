import './styles.css';

export const TreinoReactCard = ({ name, img, level }) => (
  <div
    className="digiPost"
  >
    <img src={img} alt={name}/>
    <div className="digi-content">
      <h1 className="h1-content">{name}</h1>
      <p>{level}</p>
    </div>
  </div>
);
