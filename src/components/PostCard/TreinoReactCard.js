export const TreinoReactCard = ({ name, img, level }) => (
  <div
    className="digiPost shadow-md flex flex-col items-center 
            justify-center transition-all ease-in-out hover:scale-125"
  >
    <img src={img} />
    <div className="digi-content flex flex-col items-center justify-center">
      <h1 className="font-bold">{name}</h1>
      <p>{level}</p>
    </div>
  </div>
);
