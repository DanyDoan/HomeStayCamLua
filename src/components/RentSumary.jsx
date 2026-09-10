import { FaUsers, FaExpand, FaBed } from "react-icons/fa";

function RentSumary({ rentInfor = {
    name: "Phòng Tre Xanh",
    type: "Phòng đôi",
    size: "Rộng rãi",
    maxPeople: 4,
    picUrl: "hero.png",
} }) {

    return (
        <article className="rentSumary">
            {/* Image */}
            <div className="room-image-wrap">
                <img
                    src={`https://danydoan.github.io/HomeStayCamLua/${rentInfor.picUrl}`}
                    alt={`Phòng ${rentInfor.name}`}
                    loading="lazy"
                />
                <span className="room-type-badge">{rentInfor.type}</span>
            </div>

            {/* Content */}
            <div className="rentSummaryContent">
                <h2>{rentInfor.name}</h2>

                <div className="room-meta">
                    <span>
                        <FaUsers aria-hidden="true" />
                        {rentInfor.maxPeople} người
                    </span>
                    <span>
                        <FaExpand aria-hidden="true" />
                        {rentInfor.size}
                    </span>
                </div>

                <button
                    className="room-book-btn"
                    id={`book-btn-${rentInfor.name?.replace(/\s/g, "-").toLowerCase()}`}
                    aria-label={`Đặt phòng ${rentInfor.name}`}
                >
                    <FaBed aria-hidden="true" />
                    Đặt phòng
                </button>
            </div>
        </article>
    );
}

export default RentSumary;