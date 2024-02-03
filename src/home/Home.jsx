import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { StyledHome } from "./Home.styled";

const Home = () => {
  return (
    <StyledHome>
      <div>
        <Header />
      </div>
      <Footer />
    </StyledHome>
  );
};

export default Home;
