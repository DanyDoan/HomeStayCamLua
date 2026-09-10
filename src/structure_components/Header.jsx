import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {

    const { i18n} = useTranslation()

    const [language, setLanguage] = useState("vi");

    const handleLanguage = (lang) =>{
        setLanguage(lang);
        i18n.changeLanguage(lang);
        return;
    }

    return (
        <header>
            <div>Logo</div>
            <h1>HomeStay Cam Lua</h1>
            <div id="languageBtn">
                <button onClick={() => handleLanguage("vi")} className={language === "vi"? "active" : ""}>VI</button>
                <button onClick={() => handleLanguage("en")} className={language === "en"? "active" : ""}>EN</button>
            </div>
        </header>
    )
}

export default Header