import { FaUsers, FaExpand, FaBed } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

import RentOverlay from "./RentOverlay";

function RentSumary({ rentInfor = {
    name: "Eco",
    type: "Couple",
    size: "Medium",
    maxPeople: 4,
    picUrl: "hero.png",
    pics: ["anh1.png", "anh2.png", "anh3.png"],
    services: ["Life jackets available", "Party venue", "Free inhouse karaoke"]
} }) {

    const { t } = useTranslation();

    const [isShow, setShow] = useState(false);
    const [picNo, setPicNo] = useState(0);

    return (
        <>
            <article className="rentSumary">
                {/* Image */}
                <div className="room-image-wrap">
                    <img
                        src={`${rentInfor.picUrl}`}
                        alt={`Phòng ${rentInfor.name}`}
                        loading="lazy"
                    />
                    <span className="room-type-badge">{t(rentInfor.type)}</span>
                </div>

                {/* Content */}
                <div className="rentSummaryContent">
                    <h2>{t(rentInfor.name)}</h2>

                    <div className="room-meta">
                        <span>
                            <FaUsers aria-hidden="true" />
                            {rentInfor.maxPeople} {t("People")}
                        </span>
                        <span>
                            <FaExpand aria-hidden="true" />
                            {rentInfor.size}
                        </span>
                    </div>

                    <button
                        className="room-book-btn" SƯ
                        onClick={() => setShow(!isShow)}
                    >
                        <FaBed aria-hidden="true" />
                        {t("Details")}
                    </button>

                </div>
            </article>
            {isShow && <RentOverlay rentInfor={rentInfor} isShow={isShow} setShow={setShow} picNo={picNo} setPicNo={setPicNo}/>}
        </>
    );
}

export default RentSumary;