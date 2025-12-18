import Header from "../../components/header/index";
import Footer from "../../components/footer";
import HomeHeroImage from "../../assets/HomeHero.svg";
import MainContainer from "../../components/main";
import TradingText from "../../components/article";

const Home = () => {
  return (
    <>
      <div
        className="columns"
        style={{
          backgroundImage: `url(${HomeHeroImage})`,
          minHeight: "100vh",
          paddingBottom: "3rem",
        }}
      >
        <Header isHomePage={true} />
        <TradingText />
      </div>
      <MainContainer />
      <Footer />
    </>
  );
};
export default Home;
