import "../assets/RentPage.css";
import { useTranslation } from "react-i18next";
import RentSumary from "../components/RentSumary";

// Sample room data
const ROOMS = [
    {
        name: "Phòng Tre Xanh",
        type: "Phòng đôi",
        size: "25 m²",
        maxPeople: 2,
        picUrl: "anh1.png",
    },
    {
        name: "Phòng Lúa Vàng",
        type: "Phòng gia đình",
        size: "40 m²",
        maxPeople: 5,
        picUrl: "anh2.png",
    },
    {
        name: "Phòng Sen Hồng",
        type: "Phòng đơn",
        size: "18 m²",
        maxPeople: 1,
        picUrl: "anh1.png",
    },
    {
        name: "Phòng Hoàng Hôn",
        type: "Phòng đôi",
        size: "30 m²",
        maxPeople: 3,
        picUrl: "anh2.png",
    },
];

function RentPage() {
    const { i18n, t } = useTranslation();
    const isVI = i18n.language === "vi" || i18n.language?.startsWith("vi");

    return (
        <main>
            {/* Page header */}
            <div className="rent-page-header">
                <h1>{t("Available")}</h1>
                <p>
                    {t("Please choose the room that suits your needs.")}
                </p>
            </div>

            {/* Room grid */}
            <div className="rent-grid-section">
                <div className="rent-grid">
                    {ROOMS.map((room, i) => (
                        <RentSumary key={i} rentInfor={room} />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default RentPage;