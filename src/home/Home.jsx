import Body from "../components/body/Body";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { StyledHome } from "./Home.styled";

const Home = ({ toggleTheme }) => {
  return (
    <StyledHome>
      <div>
        <Header />
        <Body toggleTheme={toggleTheme} />
      </div>
      <Footer />
    </StyledHome>
  );
};

export default Home;
