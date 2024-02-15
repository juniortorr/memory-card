import '../styles/Card.css';

const Card = ({ character }) => {
  return (
    <div className="card">
      <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt="" />
      <h2>{character.name}</h2>
      <p></p>
    </div>
  );
};

export default Card;
