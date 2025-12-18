import newsIcon from "../../../assets/section/news-icon.svg";
import style from "./style.module.scss";
import { NavLink, useLocation } from "react-router-dom";

const NewsLetter = () => {
  const location = useLocation();
  const changeColor = location.pathname === "/about";

  return (
    <section
      className={`${style.newsSection} ${
        changeColor ? style.changeColor : ""
      } `}
    >
      <div className={style.news}>
        <div className={style.news_row}>
          <div className={style.news_row_icon}>
            <img
              src={newsIcon}
              alt="vector"
              draggable="false"
              style={{ userSelect: "none" }}
            />
          </div>
          <div className={style.news_row_text}>
            <h2>
              <b>Subscribe</b> our news
            </h2>
            <p>
              Hey! Are you tired of missing out on our updates? Subscribe to our
              news now and stay in the loop!
            </p>
          </div>
        </div>

        <div className={style.news_form}>
          <input type="email" name="email" placeholder="Email Address" />
          <NavLink to="/register">Submit</NavLink>
        </div>
      </div>
    </section>
  );
};
export default NewsLetter;
