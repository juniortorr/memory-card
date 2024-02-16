import './assets/styles/App.css';
import getData from './assets/helpers/fetch';
import Card from './assets/components/Card';
import { useEffect, useState } from 'react';
import { md5 } from 'js-md5';

const selectedCharacters = [];
const hash = md5(process.env.REACT_APP_API_KEY);

function App() {
  const randomIndexes = [];
  const randomCharacters = [];
  const [score, setScore] = useState(0);
  const [apiData, setApidata] = useState([]);
  const [highScore, setHighScore] = useState(0);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `http://gateway.marvel.com/v1/public/events/29/characters?limit=70&ts=1&apikey=40e806804049a89d6bedae9e247da779&hash=${hash}`,
          {
            mode: 'cors',
          }
        );
        const json = await response.json();
        setApidata([...json.data.results]);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  if (apiData.length > 0) {
    for (let i = 1; i < 11; i += 1) {
      const num = Math.floor(Math.random() * 59);
      randomIndexes.push(num);
    }
    randomIndexes.map((key) => {
      randomCharacters.push(apiData[key]);
    });
    return (
      <main>
        <h2>Score: {score}</h2>
        <h2>High Score: {highScore}</h2>
        {randomCharacters.map((key, index) => {
          return (
            <Card
              selectedCharacters={selectedCharacters}
              character={key}
              key={index}
              score={score}
              setScore={setScore}
              highScore={highScore}
              setHighScore={setHighScore}
            />
          );
        })}
      </main>
    );
  } else {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
}

export default App;
