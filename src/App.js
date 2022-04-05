import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + "/brasil_futebol.svg"} className="App-logo" alt="logo" />
        <p className='title'>
          Jogo dos Onze
        </p>      
          Em breve
      </header>
    </div>
  );
}

export default App;
