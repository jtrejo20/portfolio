import logo from './linux-tux-3.svg';
import './About.css';

function About() {
  return (
    <div className="About">
      <header id="About-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1 id="About-title">
          More about Javier Homepage
        </h1>
        <div>
            <p id="">Hello everybody</p>
        </div>
      </header>
    </div>
  );
}

export default About;
