import style from "./style.module.scss";

const MarketSection = () => {
  return (
    <section style={{ backgroundColor: "#00150FFF" }}>
      <div className={`${style.market} container-spacing`}>
        <h2>
          <b>What</b>Else
        </h2>
        <div className={style.market_list}>
          <div className={style.market_list_piece}>
            <h3>Instant market access</h3>
            <p>
              Allows for quick reactions to price changes and real-time trading
              operations
            </p>
          </div>
          <div className={style.market_list_piece}>
            <h3>Variety of instruments</h3>
            <p>
              Provides a wide selection of financial instruments for trading,
              helping to diversify portfolios and increase potential profits
            </p>
          </div>
          <div className={style.market_list_piece}>
            <h3>24/7 technical support</h3>
            <p>
              Guarantees assistance and consultations from specialists at any
              time of day, which is especially important when issues or
              questions arise
            </p>
          </div>
          <div className={style.market_list_piece}>
            <h3>Convenient financial operations</h3>
            <p>
              Ensures fast and convenient fund withdrawals, as well as
              transparent conditions for depositing and withdrawing funds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
