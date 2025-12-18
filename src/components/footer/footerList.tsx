import style from "./style.module.scss";
import { NavLink } from "react-router-dom";

type FooterItem = {
  title: string;
  text1: string;
  text2: string;
  text3?: string;
  text4?: string;
};

type FooterListProps = {
  data: FooterItem[];
  isSmallScreen: boolean;
};

export const FooterList: React.FC<FooterListProps> = ({
  data,
  isSmallScreen,
}) => {
  return (
    <div className={style.footer_row_links}>
      {data.map((item, index) => (
        <div key={item.title} className={style.footer_row_links_item}>
          <h3>{item.title}</h3>

          <NavLink to={item.text1 === "Free demo" ? "/" : "#"}>
            {item.text1}
          </NavLink>

          <NavLink to={item.text2 === "About us" ? "/about" : "#"}>
            {item.text2}
          </NavLink>

          {!isSmallScreen || index !== 1
            ? item.text3 && (
                <NavLink to={item.text3 === "login" ? "/login" : "#"}>
                  {item.text3}
                </NavLink>
              )
            : null}

          {item.text4 && <NavLink to="#">{item.text4}</NavLink>}
        </div>
      ))}
    </div>
  );
};
