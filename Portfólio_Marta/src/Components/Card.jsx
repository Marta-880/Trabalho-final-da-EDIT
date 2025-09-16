import { Link } from "react-router-dom";

function Card({title, img, area, id, text, tools}){

    if (area === true){
        area = "Design"
    }else if(area === false){
        area = "Front-end"
    }
  console.log(area)

    return <>
     <Link to={"/my-projects/"+ id}>   
    <div className="card">
        <h2>{title}</h2>
        <img src={`https://www.artic.edu/iiif/2/${img}/full/843,/0/default.jpg`} alt={title} width={300} height={400} />
        <p>{area}</p>
        <p>{text}</p>
        <p>Tools: {tools}</p>
    </div>  </Link>
    </>
}

export default Card;