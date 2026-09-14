import "../assets/AuthPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaLeaf, FaEnvelope, FaLock, FaUser, FaUserPlus } from "react-icons/fa";

import publicAxios from "../api/publicAxios"

function RegisterPage() {


    const { i18n, t } = useTranslation();

    const [form, setForm] = useState({ username: "", email: "", password: "", passwordRepeat: "" });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(`[${e.target.name}]: ${e.target.value}`)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requirements = {
            "usernameReg": /^[a-zA-Z][a-zA-Z0-9]{3,24}$/,
            "passwordReg": /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*])[a-zA-Z0-9\d@$!%*?&]{8,}$/,
            "emailReg": /^(?=.*[@])}$/ 
        }

        if (!requirements.usernameReg.test(form.username) ||
            !requirements.passwordReg.test(form.password))
            {
                alert(t("Your username and password must be fit to the requirements"));
                return;
            }

        const response = await publicAxios.post("/register", form);
        alert(JSON.stringify(response.data.message));
    };


    return (
        <main className="auth-page">
            <div className="auth-card">
                {/* Branding */}
                <div className="auth-brand">
                    <FaLeaf className="auth-leaf" aria-hidden="true" />
                    <h1>{t("Register")}</h1>
                    <p>{t("Create an account to book rooms easily.")}</p>
                </div>

                {/* Form */}
                <form className="auth-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="reg-name">{t("Username")}</label>
                        <div className="input-wrap">
                            <FaUser className="input-icon" aria-hidden="true" />
                            <input
                                id="reg-name"
                                type="text"
                                name="username"
                                value={form.name}
                                onChange={handleChange}
                                placeholder={t("John Doe")}
                                autoComplete="name"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="reg-email">Email</label>
                        <div className="input-wrap">
                            <FaEnvelope className="input-icon" aria-hidden="true" />
                            <input
                                id="reg-email"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="email@camlua.vn"
                                autoComplete="email"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="reg-password">{t("Password")}</label>
                        <div className="input-wrap">
                            <FaLock className="input-icon" aria-hidden="true" />
                            <input
                                id="reg-password"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                autoComplete="new-password"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="reg-confirm">{t("Confirm Password")}</label>
                        <div className="input-wrap">
                            <FaLock className="input-icon" aria-hidden="true" />
                            <input
                                id="reg-confirm"
                                type="password"
                                name="passwordRepeat"
                                value={form.confirm}
                                onChange={handleChange}
                                placeholder="••••••••"
                                autoComplete="new-password"
                                required
                            />
                        </div>
                    </div>

                    <button id="register-submit-btn" type="submit" className="auth-submit-btn">
                        <FaUserPlus aria-hidden="true" />
                        {t("Register")}
                    </button>
                </form>

                <p className="auth-switch">
                    {t("Already have an account?")}{" "}
                    <Link to="/login">{t("Sign in")}</Link>
                </p>
            </div>
        </main>
    );
}

export default RegisterPage;