import { useParams } from "react-router";
import { use, useEffect, useState } from "react";
import Card from "./Card";


function DetailPage(){
    const {id} = useParams();
    const [work, setwork] = useState({});
    
      useEffect(() => {
        const fetchInfo = async () => {
        const data = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
        const newWork = await data.json();
        console.log("List", newWork.data);
        setwork(newWork.data);
    }
    fetchInfo();
},[]);
 

return <>
     <div className="bodyNotGrid">

        <Card key={work.id} id={work.id} title={work.title}  area={work.is_zoomable} img={work.image_id} text={work.short_description} tools={work.classification_title}> </Card>
    </div>
</>

}
    
export default DetailPage;