// Style
import "../assets/HomePage.css";

// Router
import { Link } from "react-router-dom";

// i18n
import { useTranslation } from "react-i18next";

// Icons
import { FaBed, FaLeaf, FaSpa } from "react-icons/fa";


// Components
import Card from "../components/Card";



const ROOMS = [
    {
        picUrl: "anh1.png",
        titleVI: "Tiện ích giữa không gian xanh",
        titleEN: "A green and comfortable accomodation",
    },
    {
        picUrl: "anh2.png",
        titleVI: "Phong cảnh bình yên chốn quê nhà",
        titleEN: "Peaceful scenerios",
    },
    {
        picUrl: "anhteam1.png",
        titleVI: "Địa điểm dã ngoại tuyệt vời cùng bạn bè",
        titleEN: "Ideal place for picnic and gathering with friends",
    },
    {
        picUrl: "anhteam2.png",
        titleVI: "Một buổi tụ họp cuối tuần?",
        titleEN: "A weekend gathering party?",
    }
];

function HomePage() {
    const { i18n, t } = useTranslation();
    const isVI = i18n.language === "vi" || i18n.language?.startsWith("vi");

    return (
        <main>
            {/* ── Hero ── */}
            <section className="hero" aria-label="Hero banner">
                <div className="hero-overlay" aria-hidden="true" />
                <div className="hero-content">
                    <span className="hero-eyebrow">
                        🌿 {isVI ? "Chào mừng đến với" : "Welcome to"}
                    </span>
                    <h2>
                        HomeStay <span>Cẩm Lụa</span>
                    </h2>
                    <p>
                        {isVI
                            ? "Tìm về thiên nhiên, tận hưởng không gian xanh mát và bình yên tại vùng quê."
                            : "Return to nature — enjoy a serene, green escape nestled in the heart of the Vietnamese countryside."}
                    </p>
                    <Link to="/rents" className="hero-cta" id="hero-book-btn">
                        <FaBed />
                        {isVI ? "Xem phòng ngay" : "Rents available"}
                    </Link>
                </div>
            </section>

            {/* ── Room Previews ── */}
            <section className="rooms-preview" aria-label="Room previews">
                <div className="section-label">
                    <h2>{isVI ? "Vì sao là chúng tôi" : "Why us?"}</h2>
                    <p>
                        {isVI
                            ? "Khám phá không gian nghỉ dưỡng thiên nhiên của chúng tôi."
                            : "Explore our nature-inspired accommodation spaces."}
                    </p>
                </div>

                <div className="rooms-list">
                    {ROOMS.map((room, i) => (
                        <Card
                            key={i}
                            picUrl={room.picUrl}
                            title={isVI ? room.titleVI : room.titleEN}
                            content={isVI ? room.contentVI : room.contentEN}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default HomePage;