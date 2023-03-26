import logo from './Pinterest_Logo.webp';
import nature from './nature.jpg';
import nature1 from './nature1.jfif';
import nature2 from './nature2.jpg';
import nature3 from './nature3.jfif';
import nature4 from './nature4.jfif';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} className="logo" alt="logo" />
        <a href='#'>Today</a>
        <a href="#">Watch</a>
        <a href="#">Explore</a>
        <FontAwesomeIcon className='input-icon' icon={faSearch} color="black" size='lg' />
        <input placeholder="Search" className="input"></input>
        <button className="btn-active">log in</button>
        <button className="btn-active1">sign up</button>
        <div className="content">
          <h1>Get your next</h1>
          <div className='words'>
            <span>idea</span>
            <span>future</span>
            <span>place</span>
            <span>memories</span>
            <span>life</span>
          </div>
        </div>
        <div className='image'>
          <img className="img1" src={nature} alt="img" />
          <img className="img2" src={nature1} alt="img" />
          <img className="img3" src={nature2} alt="img" />
          <img className="img4" src={nature3} alt="img" />
          <img className="img5" src={nature4} alt="img" />
        </div>
        <button className="explore-btn">explore here <FontAwesomeIcon icon={faArrowDown} color="black" className="Down-Arrow" /></button>

      </nav>
    </div>
  );
}

export default App;
