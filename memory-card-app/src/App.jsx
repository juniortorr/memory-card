import './assets/styles/App.css';
import data from './assets/helpers/fetch';
import Card from './assets/components/Card';
import { useState } from 'react';

function App() {
  const randomIndexes = [];
  const randomCharacters = [];
  const [score, setScore] = useState(0);
  for (let i = 1; i < 11; i += 1) {
    const randomNum = Math.floor(Math.random() * 60);
    randomIndexes.push(randomNum);
  }
  randomIndexes.map((key) => {
    randomCharacters.push(data[key]);
  });
  console.log(randomCharacters);
  return (
    <main>
      <h2>Score: {score}</h2>
      {randomCharacters.map((key, index) => {
        return <Card character={key} key={index} score={score} setScore={setScore} />;
      })}
    </main>
  );
}

export default App;
