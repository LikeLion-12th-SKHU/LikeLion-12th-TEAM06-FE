import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer";

function ChallengeDetail() {
  const navigate = useNavigate();

  return (
    <>
      <MainContainer>
        <HeaderSt>
          <TitleSt>반려식물 자랑하기 EVENT</TitleSt>
          <BtnStyle onClick={() => navigate("/challenge/${id}/join")}>
            신청하기
          </BtnStyle>
        </HeaderSt>
        <img src="/assets/img/challenge.jpeg" />
        <ContentSt>
          <div>내가 키운 식물을 자랑하고 싶은 분들 주목!</div>
          <br />
          <div>
            본인 인스타에 화분 사진 올리고 plantication을 태그한 후 인스타그램
            링크를 제출해주세요!
          </div>
          <br />
          <div>추첨을 통해 5분에게 1만 원 스타벅스 쿠폰을 드립니다</div>
          <br />
          <div>✨플랜티케이션 인증 EVENT✨</div>
          <div>❗기간: 2024.07.28 (월) ~ 24.08.08 </div>
          <br />
          <div>❗필수 해시태그: #플랜티케이션 #Plantication </div>
          <br />
          <div>
            내 반려 식물 자랑도 하고 스타벅스 쿠폰도 받을 절호의
            기회!놓치지마세요!
          </div>
          <hr />
          <DetailSt>
            이벤트 주최사 : plantication <br />
            이벤트 응모기간 : ~ 2024-08-08 <br />
            당첨자 발표일 : 2024-08-09
            <br />
            총 당첨자수 : 5명 <br />
            경품태그 : # 1 만원 스타벅스 5명
            <br />
          </DetailSt>
        </ContentSt>
        <Footer />
      </MainContainer>
    </>
  );
}

export default ChallengeDetail;

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

const HeaderSt = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const TitleSt = styled.div`
  font-size: 20px;
  margin-top: 8px;
  font-weight: bold;
  font-style: italic;
`;

const BtnStyle = styled.button`
  cursor: pointer;
  margin-top: 5px;
  border: none;
  background-color: #025d00;
  border-radius: 5px;
  color: #fff;
  height: 25px;
  width: 60px;
`;

const ContentSt = styled.div`
  margin-top: 10px;
  padding: 10px;
  font-size: 18px;
  line-height: 1.4;
`;

const DetailSt = styled.div`
  margin-top: 30px;
  font-weight: bolder;
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 3px;
`;
