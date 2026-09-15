import "../assets/AuthPage.css";


import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaLeaf, FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import publicAxios from "../api/publicAxios";
import AuthContext from "../context/AuthContext";
function LoginPage() {
    const { i18n, t } = useTranslation();
    const isVI = i18n.language === "vi" || i18n.language?.startsWith("vi");

    const { user, setUser } = useContext(AuthContext)

    const [form, setForm] = useState({ username: "", password: "" });

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await publicAxios.post("/login", form);

        alert(JSON.stringify(response.data.username))
        setUser({
            username: response.data.username,
            role: response.data.role,
            accessToken: response.data.accessToken
        })
    };

    return(
        <main>
            <h2>This feature is still under development</h2>
        </main>
    )
    return (
        <main className="auth-page">
            <div className="auth-card">
                {/* Branding */}
                <div className="auth-brand">
                    <FaLeaf className="auth-leaf" aria-hidden="true" />
                    <h1>{isVI ? "Đăng nhập" : "Sign In"}</h1>
                    <p>{isVI ? "Chào mừng trở lại!" : "Welcome back!"}</p>
                </div>

                {/* Form */}
                <form className="auth-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="login-email">
                            {t("Username")}
                        </label>
                        <div className="input-wrap">
                            <FaEnvelope className="input-icon" aria-hidden="true" />
                            <input
                                id="login-email"
                                type="text"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="login-password">
                            {isVI ? "Mật khẩu" : "Password"}
                        </label>
                        <div className="input-wrap">
                            <FaLock className="input-icon" aria-hidden="true" />
                            <input
                                id="login-password"
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                autoComplete="current-password"
                                required
                            />
                        </div>
                    </div>

                    <button id="login-submit-btn" type="submit" className="auth-submit-btn">
                        <FaSignInAlt aria-hidden="true" />
                        {isVI ? "Đăng nhập" : "Sign In"}
                    </button>
                </form>

                <p className="auth-switch">
                    {isVI ? "Chưa có tài khoản?" : "Don't have an account?"}{" "}
                    <Link to="/register">
                        {isVI ? "Đăng ký ngay" : "Register here"}
                    </Link>
                </p>
            </div>
        </main>
    );
}

export default LoginPage;