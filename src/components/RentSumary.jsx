import { FaUsers, FaExpand, FaBed } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function RentSumary({ rentInfor = {
    name: "Phòng Tre Xanh",
    type: "Phòng đôi",
    size: "Rộng rãi",
    maxPeople: 4,
    picUrl: "hero.png",
} }) {

    const { i18n, t } = useTranslation();
    return (
        <article className="rentSumary">
            {/* Image */}
            <div className="room-image-wrap">
                <img
                    src={`${rentInfor.picUrl}`}
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
                    {t("Book")}
                </button>
            </div>
        </article>
    );
}

export default RentSumary;