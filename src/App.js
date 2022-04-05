import './index.css';
import {ReactComponent as DividerDesktop} from './images/pattern-divider-desktop.svg';
import {ReactComponent as DividerMobile} from './images/pattern-divider-mobile.svg';
import {ReactComponent as Dice} from "./images/icon-dice.svg";
import {useState, useEffect } from 'react';
import axios from 'axios';

function App() {
const [advice, setAdvice] = useState();
const [id, setId] = useState();

useEffect(() => {
  getAdvice();
});

const getAdvice = async() => {
  await axios("https://api.adviceslip.com/advice")
  .then(response => {
    setAdvice(response.data.slip.advice)
    setId(response.data.slip.id)
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  })
};

  return (
    <div className="App">
        <div className='advice-div'>
        <h4>{`ADVICE #${id}`}</h4>
        <p className='p'>{`"${advice}"`}</p>
        <DividerDesktop className='desktop'/>
        <DividerMobile className='mobile'/>
        </div>
        <button className='dice-button' onClick={getAdvice}>
        <Dice className='dice'/>
        </button>
    </div>
  );
}

export default App;
