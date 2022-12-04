import './App.css';
import stars from './images/bg-stars.svg'
import hills from './images/pattern-hills.svg'
import facebook from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'
import pinterest from './images/icon-pinterest.svg'

function App() {
  return (
    <body style={{
      backgroundImage: `url(${stars})` 
      }}>
   <div className="main-container">
    <div className="body-container">
    <h1>We are launching soon</h1>
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>  
      <div class="grid-item">4</div>
    </div>
    </div>
    <div className="bottom-container" style={{
      backgroundImage: `url(${hills})`,
    }}>
      <div className="social-icons">
      <img src={facebook} />
      <img src={pinterest} />
      <img src={instagram} />
      </div>
    </div>
   </div>
   </body>
  );
}

export default App;
