import './assets/styles/App.css';
import data from './assets/helpers/fetch';
import Card from './assets/components/Card';
import { useEffect } from 'react';

function App() {
  const randomIndexes = [];
  const randomCharacters = [];
  for (let i = 1; i < 11; i += 1) {
    const randomNum = Math.floor(Math.random() * 60);
    randomIndexes.push(randomNum);
  }
  randomIndexes.map((key, index) => {
    randomCharacters.push(data[index]);
  });
  console.log(randomCharacters);
  return (
    <main>
      {randomCharacters.map((key) => {
        return <Card character={key} key={key.id} />;
      })}
    </main>
  );
}

export default App;
