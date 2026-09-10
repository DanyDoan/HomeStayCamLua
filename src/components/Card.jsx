
function Card({ picUrl = "/hero.png", title = "None", content = "Blank content"}) {

    return (
        <div className="card">
            <img className="trailerPic" src={picUrl} />
            <div className="contentBox">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Card