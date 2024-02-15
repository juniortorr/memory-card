import '../styles/Card.css';

const Card = ({ character, score, setScore }) => {
  function handleClick() {
    setScore((score) => score + 1);
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt="" />
      <h2>{character.name}</h2>
      <p></p>
    </div>
  );
};

export default Card;
