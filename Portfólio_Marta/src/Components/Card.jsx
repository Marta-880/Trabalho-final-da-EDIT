function Card({title, img, area}){

    if (area == true){
        area = "Design"
    }else if(area ==false){
        area = "Front-end"
    }
  console.log(area)

    return <>
    <div className="card">
        <h2>{title}</h2>
        <img src={img} alt={title} />
        <p>{area}</p>
    </div>
    </>
}

export default Card;