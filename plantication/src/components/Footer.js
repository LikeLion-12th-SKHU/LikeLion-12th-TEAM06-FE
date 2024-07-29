import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <MainContainer>
        <FooterContent>
          <FooterLink to="/diary">
            <FooterIcon src="/assets/img/add.png" />
            익명일기
          </FooterLink>
          <FooterLink to="/cooperate">
            <FooterIcon src="/assets/img/globe.png" />
            그룹찾기
          </FooterLink>
          <HomeLink to="/">
            <HomeIcon src="/assets/img/Home.png" />
            Home
          </HomeLink>
          <FooterLink to="/guide">
            <FooterIcon src="/assets/img/book.png" />
            식물도감
          </FooterLink>
          <FooterLink to="/mypage">
            <FooterIcon src="/assets/img/user.png" />
            마이페이지
          </FooterLink>
        </FooterContent>
      </MainContainer>
    </>
  );
}

export default Footer;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  max-width: 390px;
  box-sizing: border-box;
  margin: 0 auto;
  z-index: 1;
  bottom: 0;
  position: fixed;
  background-color: #fdfdfd;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 5px 0;
`;

const FooterLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #000000;
  font-size: 12px;
  font-weight: 500;
`;

const FooterIcon = styled.img`
  width: 26px;
  height: 26px;
  margin-bottom: 5px;
`;

const HomeLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  z-index: 2;
  top: -30px;
`;

const HomeIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 5px;
`;
