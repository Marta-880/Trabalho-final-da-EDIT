import { Link } from "react-router";
import WorkCard from "./Work card";

function MyProjects(){

    return <>
    <div className="body">
     <div className="prettyButtons">
        <Link to="/my-projects/designs">
            <button className="pinkButton normalButton">Design</button>
        </Link>
        <Link to="/my-projects/front-end">
            <button className="whiteButton normalButton">Front-end</button>
        </Link>
    </div>
    <WorkCard></WorkCard>
    </div>
    </>
}

export default MyProjects