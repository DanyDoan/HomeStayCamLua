import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";

function Card({ picUrl = "hero.png", title = "None" }) {

    return (
        <article className="card">
            <img
                className="trailerPic"
                src={`https://danydoan.github.io/HomeStayCamLua/${picUrl}`}
                alt={title}
                loading="lazy"
            />
            <div className="contentBox">
                <h2>{title}</h2>
            </div>
        </article>
    );
}

export default Card;