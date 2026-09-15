import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

function RentOverlay({ rentInfor, isShow, setShow, picNo, setPicNo }) {

    const { t } = useTranslation();
    const nextPic = () => {
        setPicNo((picNo + 1) % rentInfor.pics.length);
    };

    const prevPic = () => {
        setPicNo((picNo - 1 + rentInfor.pics.length) % rentInfor.pics.length);
    };
    return (
        <div className="rentOverlay">
            <div className="imageContainer">
                <IoCloseOutline className="closeDetails" onClick={() => setShow(!isShow)} />
                <img className="rentPictures" src={"https://danydoan.github.io/HomeStayCamLua/"+rentInfor.pics[picNo]} />
                <FaChevronLeft className="picNavigationBtn" onClick={() => prevPic()} />
                <FaChevronRight className="picNavigationBtn" onClick={() => nextPic()} />

            </div>
            <h2>{t(rentInfor.name)}</h2>

            <div className="rentDetails">
                <table className="generalDetails">
                    <tbody>
                        <tr>
                            <td><label>{t("Room type")}: </label></td>
                            <td>{t(rentInfor.type)}</td>
                        </tr>
                        <tr>
                            <td><label>{t("Occupancy")}: </label></td>
                            <td>{t(rentInfor.maxPeople)}</td>
                        </tr>

                    </tbody>
                </table>
                <table className="serviceDetails">
                    <thead>
                        <tr><label>{t("Free services")}: </label></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {rentInfor.services.map((s, i) => <li>{t(s)}</li>)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2>{t("Contact")} 0919867770 {t("For Booking")}</h2>
        </div>
    )
}

export default RentOverlay;
