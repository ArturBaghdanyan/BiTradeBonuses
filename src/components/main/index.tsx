import ChooseSection from "./choose-section/chooseSection";
import BiTradeSection from "./bi-trade-section/index";
import MarketSection from "./market-section/index";
import HomeFreeAcc from "./FAQ-section/script";
import NewsLetter from "./news-letter/index";
import FeatureSection from "./feature-section/featureSection";

const MainContainer = () => {
  return (
    <main>
      <FeatureSection />
      <ChooseSection />
      <BiTradeSection />
      <MarketSection />
      <HomeFreeAcc />
      <NewsLetter />
    </main>
  );
};
export default MainContainer;
