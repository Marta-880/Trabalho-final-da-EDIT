function Card({title, img, area}){
    if(area = false){
        area = "Design"
    }else if(area = true){
        area = "Front-end"
    }


    return <>
    <div className="card">
        <h2>{title}</h2>
        <img src={img} alt={title} />
        <p>{area}</p>
    </div>
    </>
}

export default Card;