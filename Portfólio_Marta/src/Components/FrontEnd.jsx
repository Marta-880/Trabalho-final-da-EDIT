import { Link } from "react-router";
import {useState, useEffect} from "react";
import Card from "./Card";

function FrontEnd(){

    const [worklist, setworklist] = useState([]);

     useEffect(() => {
            const fetchInfo = async () => {
            const data = await fetch(`https://api.artic.edu/api/v1/artworks`);
            const newWorkList = await data.json();
            console.log("List", newWorkList.data);
            setworklist(newWorkList.data);
        }
        fetchInfo();
    },[]);

    return <>
     <div className="bodyNotGrid">
     <div className="prettyButtons">
        <Link to="/my-projects/designs">
            <button className="pinkButton normalButton">Design</button>
        </Link>
        <Link to="/my-projects">
            <button className="whiteButton normalButton">All Projects</button>
        </Link>
    </div>

    <div className="workGrid">
        {worklist.filter((work) => (work.is_zoomable === false)).length ===0 ? (
        <p>Sem trabalhos de momento</p>
    ) : (worklist.map((work) => {
        if (work.is_zoomable == false){
            return(
          <Card key={work.id}  title={work.title}  area={work.is_zoomable} img={work.image_id}> </Card>
            )}}))}
    </div>

    </div>
    </>
}

export default FrontEnd