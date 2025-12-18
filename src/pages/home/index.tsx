import Header from "../../components/header/index";
import Footer from "../../components/footer";
import MainContainer from "../../components/main";
import TradingText from "../../components/article";

import style from "./style.module.css";

const Home = () => {

  return (
    <>
     <div className={`columns ${style.hero}`}>
        <Header isHomePage={true} />
        <TradingText />
      </div>
      <MainContainer />
      <Footer />
    </>
  );
};
export default Home;
