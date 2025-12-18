import style from "./style.module.scss";
import crypto from "../../../assets/section/crypto.svg";

const ChooseSection = () => {
  return (
    <section>
      <div className={`${style.choose} container-spacing`}>
        <div className={style.choose_title}>
          <h1>
            <b>Choose </b>
            the Correct Answer and Receive a Starting Bonus for a More Confident
            Start
          </h1>
        </div>

        <div className={style.crypto_change}>
          <h1 style={{ color: "rgba(153, 161, 159, 1)" }}>
            What cryptocurrency is this?
          </h1>
          <div className={style.crypto_change_column}>
            <button>Bitcoin</button>
            <img
              src={crypto}
              alt="crypto"
              draggable="false"
              style={{ userSelect: "none" }}
            />
            <button>Ethereum</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChooseSection;
