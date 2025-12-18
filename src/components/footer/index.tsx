import BiTradeIcon from "../../assets/footer_icons/bi-trade";
import arrowIcon from "../../assets/footer_icons/arrow.png";
import { FooterList } from "./footerList";
import { footerList } from "../../data/footer-list";

import style from "./style.module.scss";
import { NavLink } from "react-router-dom";

import FacebookIcon from "../../assets/footer_icons/facebook";
import TwitterIcon from "../../assets/footer_icons/twitter";
import LinkedinIcon from "../../assets/footer_icons/linkedin";
import YoutubeIcon from "../../assets/footer_icons/youtube";
import InstagramIcon from "../../assets/footer_icons/instagram";

import { useState, useEffect } from "react";

const Footer = ({ isLoginPage = false }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 460);
  const [isActive, setIsActive] = useState(null);

  const handleIconClick = (iconId: any) => {
    setIsActive(iconId);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 460);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer>
      <div className={style.footer}>
        {!(isLoginPage && isSmallScreen) && (
          <div className={style.footer_content}>
            <div className={style.footer_content_text}>
              <span>Risk warning:</span>
              <p>
                Trading financial instruments, including binary options, carries
                a high level of risk and may result in the loss of all your
                investments. Never invest more than you can afford to lose. It's
                important to fully understand the risks involved before you
                start trading. We recommend consulting with a financial advisor
                before making any investment decisions.
              </p>
            </div>
            <div className={style.footer_content_text}>
              <span>Disclaimer:</span>
              <p>
                We are not liable for any financial losses or damages resulting
                from the use of information on this website or from trading on
                our platform.
              </p>
            </div>
          </div>
        )}

        <div className={style.footer_row}>
          <div className={style.footer_row_column}>
            <div className={style.footer_row_column_logo}>
              <BiTradeIcon />
              <img
                src={arrowIcon}
                alt="arrow-icon"
                draggable="false"
                style={{ userSelect: "none" }}
              />
            </div>
            <div className={style.footer_row_column_text}>
              <p>
                Welcome to our trading site! We offer the best, most affordable
                products and services around. Shop now and start finding great
                deals!
              </p>
            </div>
          </div>
          <FooterList
            data={footerList}
            isSmallScreen={isSmallScreen ?? false}
          />
        </div>
        <div className={style.footer_contact}>
          <NavLink
            to="/demo"
            target="_blank"
            onClick={() => handleIconClick(1)}
            className={isActive === 1 ? style.active : ""}
          >
            <FacebookIcon fill={isActive === 1 ? "#00D094" : "white"} />
          </NavLink>
          <NavLink
            to="/demo"
            target="_blank"
            onClick={() => handleIconClick(2)}
            className={isActive === 2 ? style.active : ""}
          >
            <LinkedinIcon fill={isActive === 2 ? "#00D094" : "white"} />
          </NavLink>
          <NavLink
            to="/demo"
            target="_blank"
            onClick={() => handleIconClick(3)}
            className={isActive === 3 ? style.active : ""}
          >
            <InstagramIcon fill={isActive === 3 ? "#00D094" : "white"} />
          </NavLink>
          <NavLink
            to="/demo"
            target="_blank"
            onClick={() => handleIconClick(4)}
            className={isActive === 4 ? style.active : ""}
          >
            <YoutubeIcon fill={isActive === 4 ? "#00D094" : "white"} />
          </NavLink>
          <NavLink
            to="/demo"
            target="_blank"
            onClick={() => handleIconClick(5)}
            className={isActive === 5 ? style.active : ""}
          >
            <TwitterIcon fill={isActive === 5 ? "#00D094" : "white"} />
          </NavLink>
        </div>
        <div className={style.border}>
          <p>Copyright © 2024</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
