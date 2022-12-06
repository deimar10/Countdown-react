import './App.css';
import stars from './images/bg-stars.svg'
import hills from './images/pattern-hills.svg'
import facebook from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'
import pinterest from './images/icon-pinterest.svg'

function App() {

  let countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

  let udate = setInterval(function() {
    
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days =  Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  }, 1000);

  return (
    <body style={{
      backgroundImage: `url(${stars})` 
      }}>
   <div className="main-container">
    <div className="body-container">
    <h1>We are launching soon</h1>
    <div class="grid-container">
      <div class="grid-item" id="days"></div>
      <div class="grid-item" id="hours"></div>
      <div class="grid-item" id="minutes"></div>  
      <div class="grid-item" id="seconds"></div>
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
