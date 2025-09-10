import {useState, useEffect} from "react";
import Card from "./Card";

function WorkCard() {

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


    <div>
         {worklist.map((work) => {
            return(
          <Card key={work.id} title={work.title}  area={work.is_zoomable} img={work.image_id}> </Card>
            )})}

    </div>


</>

}

export default WorkCard;