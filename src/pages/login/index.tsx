import { NavLink } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import google from "../../assets/google.svg";

import style from "./style.module.scss";

const LoginPage = () => {
  return (
    <div className={style.page}>
      <Header />
      <div className="pages_title">
        <p>Login</p>
      </div>
      <div className={style.page_container}>
        <div className={style.page_container_content}>
          <div className={style.page_container_content_column}>
            <div className={style.page_container_content_column_title}>
              <h1>Welcome Back</h1>
              <p>
                Hey there! Ready to log in? Just enter your username and
                password below and you'll be back in action in no time. Let's
                go!
              </p>
            </div>

            <form>
              <div className={style.page_google}>
                <div className={style.page_google_row}>
                  <img
                    src={google}
                    alt="google"
                    draggable="false"
                    style={{ userSelect: "none" }}
                  />
                  <span>Continue with google</span>
                </div>
                <div className={style.page_google_line}>
                  <div className={style.page_google_line_item}></div>
                  <span>Or</span>
                  <div className={style.page_google_line_item}></div>
                </div>
              </div>

              <div className={style.page_form}>
                <div className={style.page_form_input}>
                  <label>Email</label>
                  <input type="email" placeholder="Email address" />
                </div>
                <div className={style.page_form_input}>
                  <label>Password</label>
                  <input type="password" placeholder="Password" />
                </div>

                <div className={style.page_form_checkbox}>
                  <div className={style.page_form_checkbox_text}>
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </div>
                  <span>Forget Password</span>
                </div>
              </div>

              <div className={style.button}>
                <button>Sign In</button>
                <p>
                  Don’t have an account yet?&nbsp;
                  <NavLink to="/register">Sign Up</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer isLoginPage={true} />
    </div>
  );
};

export default LoginPage;
