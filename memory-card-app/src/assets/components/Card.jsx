import '../styles/Card.css';

const Card = ({ character, score, setScore, selectedCharacters, highScore, setHighScore }) => {
  function handleClick() {
    if (selectedCharacters.includes(character.name)) {
      console.log('yeah here we go');
      if (score > highScore) {
        setHighScore(() => score);
        setScore(() => 0);
      }
      while (selectedCharacters.length) {
        selectedCharacters.splice(0, 1);
      }
    } else {
      selectedCharacters.push(character.name);
      console.log(selectedCharacters);
      setScore((score) => score + 1);
    }
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt="" />
      <h2>{character.name}</h2>
    </div>
  );
};

export default Card;
