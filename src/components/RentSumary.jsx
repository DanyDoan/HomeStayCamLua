function RentSumary({rentInfor = {
    "name": "Room 1",
    "type": "Luxury",
    "size": "large",
    "maxPeople": 10,
    "picUrl": "hero.png"
}}){

    return(
        <div className="rentSumary">
            <img src={`${import.meta.env.BASE_URL}${rentInfor.picUrl}`}/>
            <div className="rentSummaryContent">
                <h2>{rentInfor.name}</h2>
                <p>{rentInfor.type}</p>
            </div>
        </div>
    )
}

export default RentSumary