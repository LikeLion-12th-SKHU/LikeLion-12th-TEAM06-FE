import styled from "styled-components";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function Challenge() {
  return (
    <MainContainer>
      <Header />
      <ChallengeSt to="/challenge/${id}">
        <ImgSt src="./assets/img/challenge.jpeg" />
        <span>반려식물 자랑대회</span>
      </ChallengeSt>
      <Footer />
    </MainContainer>
  );
}

export default Challenge;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 390px;
  box-sizing: border-box;
  background-color: #fdfdfd;
  margin: 0 auto;
`;

const ChallengeSt = styled(Link)`
  margin: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #bababa;
`;

const ImgSt = styled.img`
  width: 80%;
  margin-bottom: 10px;
  border-radius: 10px;
`;
