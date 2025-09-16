import { Link } from "react-router";

function HomePage(){

    return<> 
        <div className="body">
        <div className="closer">
            <h3 className="title smallertitle">Hi! I'm Marta.</h3>
            <h1 className="title">Welcome to my portfolio</h1>
            <span>I'm both a designer and a front-end developer. My goal is to transform ideas into reality, combining creativity and technology to bring unique projects to life.</span>
            
        </div>
        <div className="imagemcentrada">
            <img src="../../chaco.png" alt="Me!" className="me"></img>
        </div>
        <div className="prettyButtons closer">
        <Link to="/my-projects/designs">
            <button className="pinkButton normalButton">Design</button>
        </Link>
        <Link to="/my-projects/front-end">
            <button className="whiteButton normalButton">Front-end</button>
        </Link>
        </div>
    </div>
    <div className="footer">
        <a href="https://www.behance.net/martapereira26">Check also my behance!</a>
    </div>
    </>
}

export default HomePage;