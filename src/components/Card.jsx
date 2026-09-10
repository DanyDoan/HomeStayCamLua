import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";

function Card({ picUrl = "hero.png", title = "None", content = "Blank content" }) {

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
                <p>{content}</p>
                {/* <Link to="/rents" className="card-cta" aria-label={`Xem phòng ${title}`}>
                    <FaBed />
                    Đặt phòng
                </Link> */}
            </div>
        </article>
    );
}

export default Card;