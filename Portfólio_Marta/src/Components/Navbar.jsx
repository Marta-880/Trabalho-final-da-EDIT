import { Link } from "react-router";

function NaveBar (){

    return (
    <div className="header">
      <div>
        <Link to="/">
          <img className="icon" src="../../output-onlinepngtools.png" alt="icon"></img> 
        </Link>
      </div>
      <div>
        <Link to="/about-me">
            <button className="button">About me</button>
        </Link>
        <Link to="/my-projects">
            <button className="button">My projects</button>
        </Link>
        <Link to="/contact-me">
            <button className="normalButton pinkButton">Contact me!</button>
        </Link>
      </div>
    
    </div>
  );
}


export default NaveBar

   