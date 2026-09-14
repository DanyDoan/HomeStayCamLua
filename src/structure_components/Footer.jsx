import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

function Footer() {
    return (
        <footer>
            <div className="footer-inner">
                {/* Brand section */}
                <div className="footer-brand">
                    <h2>
                        HomeStay <span>Cẩm Lụa</span>
                    </h2>
                    <p>🌿 Tận hưởng thiên nhiên — Embrace Nature</p>
                </div>

                {/* Contacts section */}
                <div className="footer-contacts">
                    <h3>Liên hệ / Contact</h3>

                    <div className="contact-item">
                        <FaFacebook />
                        <span>HomeStay CamLua</span>
                    </div>

                    <div className="contact-item">
                        <SiZalo />
                        <span>07XXX05YYY</span>
                    </div>

                    <div className="contact-item">
                        <FaPhoneAlt />
                        <span>07XXX05YYY</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 HomeStay Cẩm Lụa. Thiết kế bởi D4N.</p>
            </div>
        </footer>
    );
}

export default Footer;