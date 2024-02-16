import { md5 } from 'js-md5';
const hash = md5(process.env.REACT_APP_API_KEY);

async function getData() {
  try {
    const response = await fetch(
      `http://gateway.marvel.com/v1/public/events/29/characters?limit=70&ts=1&apikey=40e806804049a89d6bedae9e247da779&hash=${hash}`,
      {
        mode: 'cors',
      }
    );
    const json = await response.json();
    return json.data.results;
  } catch (error) {
    console.log(error);
  }
}

export default getData;
