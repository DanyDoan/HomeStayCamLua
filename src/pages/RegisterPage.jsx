import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaLeaf, FaEnvelope, FaLock, FaUser, FaUserPlus } from "react-icons/fa";
import "../assets/AuthPage.css";

function RegisterPage() {
    const { i18n } = useTranslation();
    const isVI = i18n.language === "vi" || i18n.language?.startsWith("vi");

    const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(isVI ? "Tính năng đang phát triển!" : "Feature coming soon!");
    };

    return (
        <main>
            <h2>Chức năng đang phát triển thêm...</h2>
        </main>
    )
    // return (
    //     <main className="auth-page">
    //         <div className="auth-card">
    //             {/* Branding */}
    //             <div className="auth-brand">
    //                 <FaLeaf className="auth-leaf" aria-hidden="true" />
    //                 <h1>{isVI ? "Đăng ký" : "Register"}</h1>
    //                 <p>{isVI ? "Tạo tài khoản để đặt phòng dễ dàng hơn." : "Create an account to book rooms easily."}</p>
    //             </div>

    //             {/* Form */}
    //             <form className="auth-form" onSubmit={handleSubmit} noValidate>
    //                 <div className="form-group">
    //                     <label htmlFor="reg-name">{isVI ? "Họ và tên" : "Full Name"}</label>
    //                     <div className="input-wrap">
    //                         <FaUser className="input-icon" aria-hidden="true" />
    //                         <input
    //                             id="reg-name"
    //                             type="text"
    //                             name="name"
    //                             value={form.name}
    //                             onChange={handleChange}
    //                             placeholder={isVI ? "Nguyễn Văn A" : "John Doe"}
    //                             autoComplete="name"
    //                             required
    //                         />
    //                     </div>
    //                 </div>

    //                 <div className="form-group">
    //                     <label htmlFor="reg-email">Email</label>
    //                     <div className="input-wrap">
    //                         <FaEnvelope className="input-icon" aria-hidden="true" />
    //                         <input
    //                             id="reg-email"
    //                             type="email"
    //                             name="email"
    //                             value={form.email}
    //                             onChange={handleChange}
    //                             placeholder="email@camlua.vn"
    //                             autoComplete="email"
    //                             required
    //                         />
    //                     </div>
    //                 </div>

    //                 <div className="form-group">
    //                     <label htmlFor="reg-password">{isVI ? "Mật khẩu" : "Password"}</label>
    //                     <div className="input-wrap">
    //                         <FaLock className="input-icon" aria-hidden="true" />
    //                         <input
    //                             id="reg-password"
    //                             type="password"
    //                             name="password"
    //                             value={form.password}
    //                             onChange={handleChange}
    //                             placeholder="••••••••"
    //                             autoComplete="new-password"
    //                             required
    //                         />
    //                     </div>
    //                 </div>

    //                 <div className="form-group">
    //                     <label htmlFor="reg-confirm">{isVI ? "Xác nhận mật khẩu" : "Confirm Password"}</label>
    //                     <div className="input-wrap">
    //                         <FaLock className="input-icon" aria-hidden="true" />
    //                         <input
    //                             id="reg-confirm"
    //                             type="password"
    //                             name="confirm"
    //                             value={form.confirm}
    //                             onChange={handleChange}
    //                             placeholder="••••••••"
    //                             autoComplete="new-password"
    //                             required
    //                         />
    //                     </div>
    //                 </div>

    //                 <button id="register-submit-btn" type="submit" className="auth-submit-btn">
    //                     <FaUserPlus aria-hidden="true" />
    //                     {isVI ? "Đăng ký" : "Register"}
    //                 </button>
    //             </form>

    //             <p className="auth-switch">
    //                 {isVI ? "Đã có tài khoản?" : "Already have an account?"}{" "}
    //                 <Link to="/login">{isVI ? "Đăng nhập" : "Sign in"}</Link>
    //             </p>
    //         </div>
    //     </main>
    // );
}

export default RegisterPage;