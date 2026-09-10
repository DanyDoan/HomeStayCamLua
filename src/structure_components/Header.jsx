import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaHome, FaBed, FaSignInAlt, FaUserPlus, FaLeaf } from "react-icons/fa";

function Header() {
    const { i18n, t } = useTranslation();
    const [language, setLanguage] = useState("vi");
    const location = useLocation();

    const handleLanguage = (lang) => {
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };

    const navLinks = [
        { to: "/",         labelKey: "HomePage",    icon: <FaHome /> },
        { to: "/rents",    labelKey: "RentPage",    icon: <FaBed /> },
        { to: "/login",    labelKey: "LoginPage",   icon: <FaSignInAlt /> },
        { to: "/register", labelKey: "RegisterPage", icon: <FaUserPlus /> },
    ];

    return (
        <header>
            {/* Brand */}
            <div className="header-brand">
                <span className="brand-icon" aria-hidden="true">
                    <FaLeaf style={{ color: "#8fb87a" }} />
                </span>
                <h1>
                    HomeStay <span>Cẩm Lụa</span>
                </h1>
            </div>

            {/* Navigation */}
            <nav aria-label="Main navigation">
                {navLinks.map(({ to, labelKey, icon }) => (
                    <Link
                        key={to}
                        to={to}
                        className={location.pathname === to ? "active" : ""}
                        aria-current={location.pathname === to ? "page" : undefined}
                    >
                        {icon}
                        <span>{t(labelKey)}</span>
                    </Link>
                ))}
            </nav>

            {/* Language toggle */}
            <div className="lang-toggle" aria-label="Language selector">
                <button
                    id="lang-vi"
                    onClick={() => handleLanguage("vi")}
                    className={language === "vi" ? "active" : ""}
                    aria-pressed={language === "vi"}
                >
                    VI
                </button>
                <button
                    id="lang-en"
                    onClick={() => handleLanguage("en")}
                    className={language === "en" ? "active" : ""}
                    aria-pressed={language === "en"}
                >
                    EN
                </button>
            </div>
        </header>
    );
}

export default Header;