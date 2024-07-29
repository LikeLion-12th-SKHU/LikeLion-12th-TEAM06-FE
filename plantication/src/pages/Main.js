import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <MainContainer>
        <Header />
        <ContentSt>
          <TitleSt>"나만의 식물을 찾는 여정"</TitleSt>
          <BtnSt onClick={() => navigate("/recommendation")}>
            나의 식물 찾기🌱 &#62;
          </BtnSt>
        </ContentSt>
        <DiarySt></DiarySt>
        <ChallengeSt>
          <ImageWrapper>
            <TitleWrapper>
              <Title>작은 손길을 통해</Title>
            </TitleWrapper>
            <ImgSt
              src="/assets/img/challenge.jpeg"
              alt="Challenge"
              onClick={() => navigate("/challenge")}
            />
            <Participants>
              100+ <br />
              participants
            </Participants>
            <Tag>#브래덴코</Tag>
          </ImageWrapper>
          <TextWrapper>
            <Subtitle>일상에 푸르름을 더하는 시간</Subtitle>
          </TextWrapper>
        </ChallengeSt>
        <Footer />
      </MainContainer>
    </>
  );
}

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #fdfdfd;
  margin: 0 auto;
`;

const ContentSt = styled.div`
  background-color: #00300e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const TitleSt = styled.h1`
  color: #fff;
  font-weight: bolder;
  font-size: 22px;
  margin-bottom: 8px;
`;

const BtnSt = styled.button`
  padding: 2px 15px;
  border: 1px solid #4cd964;
  border-radius: 5px;
  color: #fff;
  background-color: #00300e;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;

const DiarySt = styled.div`
  height: 100px;
  width: 100%;
  background-color: #fff;
`;

const ChallengeSt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #003e11;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ImgSt = styled.img`
  cursor: pointer;
  margin-top: 60px;
  width: 80%;
  border-radius: 10px;
`;

const Participants = styled.div`
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`;

const Tag = styled.div`
  text-align: center;
  position: absolute;
  top: 70px;
  right: 5px;
  background-color: white;
  padding: 5px 10px;
  border-radius: 5px;
  width: 90px;
  font-size: 16px;
  font-weight: bold;
`;

const TextWrapper = styled.div`
  text-align: center;
  color: white;
  margin-top: 10px;
`;

const TitleWrapper = styled.div`
  text-align: left;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Subtitle = styled.div`
  font-size: 14px;
  margin-top: 5px;
`;
