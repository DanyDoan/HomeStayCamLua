import "../assets/RentPage.css";
import { useTranslation } from "react-i18next";
import RentSumary from "../components/RentSumary";

// Sample room data
const ROOMS = [
    {
        name: "Sun Flower",
        type: "Family",
        size: "25 m²",
        maxPeople: 4,
        picUrl: "anh1.png",
        pics: ["sunflower1.png", "sunflower2.png", "sunflower3.png"],
        services: ["Life jackets available", "Party venue", "Free inhouse karaoke"]

    },
    {
        name: "Summer Sunshine",
        type: "Couple",
        size: "40 m²",
        maxPeople: 6,
        picUrl: "anh2.png",
        pics: ["summersunshine1.png", "summersunshine2.png", "summersunshine3.png"],
        services: ["Life jackets available", "Party venue"]
    }
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