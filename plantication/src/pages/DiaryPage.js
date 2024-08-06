import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { getDiaries, getDiaryLikes } from "../api"; // getDiaries 및 getDiaryLikes 함수 import

function DiaryPage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getDiaries();
        const diaries = response.data.diaries;

        // 각 다이어리 항목의 좋아요 수를 가져옴
        const diariesWithLikes = await Promise.all(
          diaries.map(async (diary) => {
            const likesResponse = await getDiaryLikes(diary.id);
            return { ...diary, likes: likesResponse.data };
          })
        );

        setPosts(diariesWithLikes);
      } catch (error) {
        console.error("다이어리 데이터를 가져오는 데 실패했습니다:", error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (id) => {
    navigate(`/diary/${id}`);
  };

  return (
    <MainContainer>
      <Header />
      <Title1>Diary Page</Title1>
      <PostsContainer>
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post.id} onClick={() => handlePostClick(post.id)}>
              <Image src={post.image} alt={post.title} />
              <Details>
                <Title1>{post.title}</Title1>
                <Content>{post.content}</Content>
                <Date>{new Date(post.createdAt).toLocaleDateString()}</Date>
                <Likes>❤️ {post.likes}</Likes> {/* 좋아요 수 표시 */}
              </Details>
            </PostCard>
          ))
        ) : (
          <NoData>일기를 추가해주세요.</NoData>
        )}
      </PostsContainer>
      <AddBtn onClick={() => navigate("/diary/add")}> + </AddBtn>
      <Footer />
    </MainContainer>
  );
}

export default DiaryPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  height: 100vh;
  box-sizing: border-box;
  background-color: #fdfdfd;
  margin: 0 auto;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 45px;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  align-items: center;
`;

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  cursor: pointer;
`;

const NoData = styled.div`
  font-size: 1.2rem;
  color: #ff0000;
  padding-top: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 10px;
`;

const Title1 = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Content = styled.div`
  color: #888;
  margin-bottom: 10px;
`;

const Date = styled.div`
  color: #888;
  font-size: 12px;
`;

const Likes = styled.div`
  color: red;
`;

const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 100px;
  align-self: flex-end;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 30px;
  background-color: rgba(2, 93, 0, 0.6);
  color: white;
  cursor: pointer;
  margin-right: 15px;
`;
