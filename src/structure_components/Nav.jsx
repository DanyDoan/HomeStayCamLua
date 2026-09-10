import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Nav(){

    const { t } = useTranslation();

    return(
        <nav>
            <Link to="/" className="navBtn">{t("HomePage")}</Link>
            <Link to="/rents" className="navBtn">{t("RentPage")}</Link>
            <Link to="/login" className="navBtn">{t("LoginPage")}</Link>
            <Link to="/register" className="navBtn">{t("RegisterPage")}</Link>
        </nav>
    )
}

export default Nav