
import './App.css';
import  Weather from './Weather.js';


export default function App() {
  return (
    <div className="App">
      <div className ="container">
     <h1> World Weather </h1> 
     <Weather/>
      <footer>
        This project is was created by {""}
        <a href="https://linkedin.com/in/isabel-castillo " target ="_blank" rel="noreferrer">
          Isabel Castillo  {""}
          </a> 
          and is open sourced by GitHub {""}
      <a href = "https://github.com/issy2500/natureweatherapp-react" 
      target = "_blank" rel="noreferrer">
        Repository

      </a> 

         </footer>
    </div>
    </div>
  );
}

