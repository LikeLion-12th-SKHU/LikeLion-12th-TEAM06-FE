/* import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Questions from "../../../common/api/questionsApi.json";
import styled from "styled-components";

function Option() {
  const [plant, setPlant] = useState([]);
  const navigate = useNavigate();

  const handleAnswerClick = (answerType) => {
    setPlant((prev) => [...prev, answerType]);

    if (plant.length + 1 === Questions.length) {
      setTimeout(() => {
        plantChecker();
      }, 300);
    } else {
      navigate(`/recommendation/question/${plant.length + 1}`);
    }
  };

  const plantChecker = () => {
    let map = {};
    let result = [];
    for (let i = 0; i < plant.length; i++) {
      if (plant[i] in map) {
        map[plant[i]] += 1;
      } else {
        map[plant[i]] = 1;
      }
    }
    for (let count in map) {
      if (map[count] >= 2) {
        result.push(count);
      }
    }
    const examResult = result.join("");
    navigate(`/recommendation/result/${examResult}`);
  };

  return (
    <MainContainer>
      <Question
        question={Questions[0].question}
        answers={Questions[0].answers}
        handleAnswerClick={handleAnswerClick}
      />
    </MainContainer>
  );
}

const Question = ({ question, answers, handleAnswerClick }) => (
  <QuestionContainer>
    <h1>{question}</h1>
    <ButtonsContainer>
      <Button onClick={() => handleAnswerClick(answers[0].type)}>
        {answers[0].content}
      </Button>
      <Button onClick={() => handleAnswerClick(answers[1].type)}>
        {answers[1].content}
      </Button>
    </ButtonsContainer>
  </QuestionContainer>
);

export default Option;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 375px;
  height: 100vh;
  box-sizing: border-box;
  background-color: #fdfdfd;
  margin: 0 auto;
  overflow: hidden;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50; 
  color: white; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049; 
  }
`;*/
