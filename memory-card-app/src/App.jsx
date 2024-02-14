import './assets/styles/App.css';
const apiKey = process.env.REACT_APP_API_KEY;
import { md5 } from 'js-md5';
const hash = md5(process.env.REACT_APP_API_KEY);

function App() {
  async function logData() {
    const response = await fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=40e806804049a89d6bedae9e247da779&hash=${hash}`,
      {
        mode: 'cors',
      }
    );
    const json = await response.json();
    console.log(json);
  }
  logData();
}

export default App;

// md5('Message to hash');
//
