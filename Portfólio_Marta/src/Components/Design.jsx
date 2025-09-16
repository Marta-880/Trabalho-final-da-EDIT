import { Link } from "react-router";
import {useState, useEffect} from "react";
import Card from "./Card";

function Design(){

const [worklist, setworklist] = useState([]);
//const hasData = !!Object.keys(worklist);

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
        <Link to="/my-projects">
            <button className="pinkButton normalButton">All Projects</button>
        </Link>
        <Link to="/my-projects/front-end">
            <button className="whiteButton normalButton">Front-end</button>
        </Link>
    </div>
    
    <div>
       {worklist.filter((work) => (work.is_zoomable === true)).length ===0 ? (
        <p>Sem trabalhos de momento</p>
    ) : (
       worklist.map((work) => {
        if (work.is_zoomable == true){
            return(
          <Card key={work.id} title={work.title}  area={work.is_zoomable} img={work.image_id}> </Card>
            )}}))}
    </div>

    </div>
    </>
}

export default Design