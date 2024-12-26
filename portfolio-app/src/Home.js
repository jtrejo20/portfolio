import logo from './linux-tux-3.svg';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header id="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1>
          Welcome to Javier's Homepage
        </h1>
        <a
          className="Home-link"
          href="/about.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about me!!
        </a>
      </header>
      <header id="Home-bio">
        <div id="Home-bio-text" >
          <h2>Bio:</h2>
        <p >My name is Javier Trejo. I am a Senior in College currently pursuing a BS in Computer Science.
            <br/>My passion is to build practical and efficient applications that will be impactful in people's lives.
            <br/>I am currently developing this website so I hope you look forward to its changes!</p> 
        </div>
      </header>
      <header id="Home-projects">
        <div>
        <p>This isn't even that difficult</p> 

        </div>
      </header>
    </div>
  );
}

export default Home;
