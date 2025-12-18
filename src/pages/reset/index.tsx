import Footer from "../../components/footer/index.js";
import Header from "../../components/header/index.js";
import ArrowLeftIcon from "../../assets/arrowL.jsx";
import style from "./style.module.scss";

export const ResetPassword = () => {
  return (
    <div className={style.reset}>
      <Header />
      <div className="pages_title">
        <p>Reset Password</p>
      </div>
      <div className={style.reset_container}>
        <div className={style.reset_container_content}>
          <div className={style.reset_container_content_column}>
            <div className={style.reset_container_content_column_title}>
              <h1>Reset your password</h1>
              <p>
                Hey there! Forgot your password? No worries, just click "forgot
                password" and follow the steps to recover it. Easy peasy lemon
                squeezy!
              </p>
            </div>
            <form>
              <div className={style.reset_form}>
                <div className={style.reset_form_input}>
                  <label>Email</label>
                  <input type="email" placeholder="Email address" />
                </div>
                <button>Reset Password</button>
              </div>
              <div className={style.reset_loginLink}>
                <ArrowLeftIcon />
                <span>
                  Back to <b>Login</b>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
