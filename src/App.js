import './App.css';
import Info from './Info';
import {useState} from 'react';

function App() {

  const [render, setRender] = useState(false);
  const [matchInfo, setMatchInfo] = useState('none');
  const [game, setGame] = useState({
    "team1": "Atlético-MG",
    "team2": "Flamengo",
    "tournament": "Supercopa do Brasil",
    "stadium": "Arena Pantanal",
    "date": "20/02/22"
  })
  
  if(!render)
    return (
      <div className="App">
        <header className="App-header">            
          <div onClick={() => setRender(true)}>
            <img src={process.env.PUBLIC_URL + "/brasil_futebol.svg"} className="App-logo" alt="logo" />
          </div>
            <p className='title'>
              Jogo dos Onze
            </p>      
              Em breve
        </header>
      </div>
    );
  else
      return(
        <div className="App">
        <body className="App-header" style={{perspective: '1000px'}}>
            <img src={process.env.PUBLIC_URL + "/field.svg"} className="Field" alt="field" />
            <div onClick={() => setMatchInfo('')}>
              <p className='header-text'>Jogo de Hoje</p>
            </div>
            <div style={{display: matchInfo}}>
              <Info info={game}/>
            </div>
        </body>
          
      </div>
      )
}

export default App;
