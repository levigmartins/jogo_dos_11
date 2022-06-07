import './App.css';
import {useState} from 'react';

function App() {

  const [render, setRender] = useState(false);
  
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
        <header className="App-header" style={{perspective: '1000px'}}>
            <img src={process.env.PUBLIC_URL + "/field.svg"} className="Field" alt="logo" />
        </header>
      </div>
      )
}

export default App;
