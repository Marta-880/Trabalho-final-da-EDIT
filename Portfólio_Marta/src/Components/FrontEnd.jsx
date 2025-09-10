import { Link } from "react-router";

function FrontEnd(){

    return <>
     <div className="body">
     <div className="prettyButtons">
        <Link to="/my-projects/designs">
            <button className="pinkButton normalButton">Design</button>
        </Link>
        <Link to="/my-projects">
            <button className="whiteButton normalButton">All Projects</button>
        </Link>
    </div>
    </div>
    </>
}

export default FrontEnd