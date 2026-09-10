// Style
import "../assets/HomePage.css";

// Router
import { Link } from "react-router-dom";

// i18n
import { useTranslation } from "react-i18next";

// Icons
import { FaBed, FaLeaf, FaSpa } from "react-icons/fa";
import { GiMountainRoad } from "react-icons/gi";
import { MdNaturePeople } from "react-icons/md";

// Components
import Card from "../components/Card";

const FEATURES = [
    {
        icon: "🌿",
        titleVI: "Thiên nhiên trong lành",
        titleEN: "Pure Nature",
        descVI: "Hít thở không khí trong lành giữa vườn cây xanh mát, xa rời ồn ào phố thị.",
        descEN: "Breathe fresh air surrounded by lush greenery, far from the noise of the city.",
    },
    {
        icon: "🏡",
        titleVI: "Không gian ấm cúng",
        titleEN: "Cozy Spaces",
        descVI: "Phòng nghỉ được trang bị đầy đủ, thiết kế theo phong cách mộc mạc gần gũi với thiên nhiên.",
        descEN: "Fully equipped rooms designed in a rustic style that blends with nature.",
    },
    {
        icon: "☮️",
        titleVI: "Bình yên tuyệt đối",
        titleEN: "Absolute Serenity",
        descVI: "Lý tưởng để thư giãn, tái tạo năng lượng và tận hưởng những khoảnh khắc bình yên bên gia đình.",
        descEN: "Ideal for relaxing, recharging, and enjoying peaceful moments with family.",
    },
];

const ROOMS = [
    {
        picUrl: "anh1.png",
        titleVI: "Phòng 1",
        titleEN: "Room 1",
        contentVI: "tui bi gay",
        contentEN: "i'm gay",
    },
    {
        picUrl: "anh2.png",
        titleVI: "Phòng 2",
        titleEN: "Room 2",
        contentVI: "tui bi gay",
        contentEN: "i'm gay",
    },
];

function HomePage() {
    const { i18n } = useTranslation();
    const isVI = i18n.language === "vi" || i18n.language?.startsWith("vi");

    return (
        <main>
            {/* ── Hero ── */}
            <section className="hero" aria-label="Hero banner">
                {/* <img
                    className="hero-image"
                    src="/hero_banner.png"
                    alt="Khung cảnh thiên nhiên HomeStay Cam Lụa"
                /> */}
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
                    {/* <Link to="/rents" className="hero-cta" id="hero-book-btn">
                        <FaBed />
                        {isVI ? "Đặt phòng ngay" : "Book a Room"}
                    </Link> */}
                </div>
            </section>

            {/* ── Features ── */}
            {/* <section className="features" aria-label="Highlights">
                <div className="features-inner">
                    <div className="section-label">
                        <h2>{isVI ? "Tại sao chọn chúng tôi?" : "Why choose us?"}</h2>
                        <p>
                            {isVI
                                ? "Chúng tôi mang đến trải nghiệm lưu trú gần gũi thiên nhiên, thân thiện và ấm áp."
                                : "We offer a nature-close, warm, and friendly stay experience."}
                        </p>
                    </div>

                    <div className="features-grid">
                        {FEATURES.map((f, i) => (
                            <div className="feature-card" key={i}>
                                <span className="feature-icon" aria-hidden="true">{f.icon}</span>
                                <h3>{isVI ? f.titleVI : f.titleEN}</h3>
                                <p>{isVI ? f.descVI : f.descEN}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* ── Room Previews ── */}
            <section className="rooms-preview" aria-label="Room previews">
                <div className="section-label">
                    <h2>{isVI ? "Phòng nghỉ dưỡng" : "Featured Rooms"}</h2>
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