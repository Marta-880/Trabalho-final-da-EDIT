import { Link } from "react-router";

function Design(){

    return <>
    <div className="body">
     <div className="prettyButtons">
        <Link to="/my-projects">
            <button className="pinkButton normalButton">All Projects</button>
        </Link>
        <Link to="/my-projects/front-end">
            <button className="whiteButton normalButton">Front-end</button>
        </Link>
    </div>

    </div>
    </>
}

export default Design