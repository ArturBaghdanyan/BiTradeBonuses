import ChooseSection from "./choose-section/chooseSection";
import BiTradeSection from "./bi-trade-section/index";
import MarketSection from "./market-section/index";
import HomeFreeAcc from "./FAQ-section/script";
import NewsLetter from "./news-letter/index";

const MainContainer = () => {
  return (
    <main>
      <ChooseSection />
      <BiTradeSection />
      <MarketSection />
      <HomeFreeAcc />
      <NewsLetter />
    </main>
  );
};
export default MainContainer;
