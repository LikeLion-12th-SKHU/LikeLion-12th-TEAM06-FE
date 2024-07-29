import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Questions from "../../common/api/questionsApi.json";
import styled from "styled-components";

function QuestionPage() {
  const { questionNumber } = useParams();
  const navigate = useNavigate();
  const questionIndex = parseInt(questionNumber) - 1;
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const TOTAL_QUESTIONS = Questions.length;

  const handleAnswerClick = (answerType) => {
    setSelectedAnswers([...selectedAnswers, answerType]);
    if (questionIndex < TOTAL_QUESTIONS - 1) {
      navigate(`/recommendation/question/${questionIndex + 2}`);
    } else {
      handleFinalSubmission([...selectedAnswers, answerType]);
    }
  };

  const handleFinalSubmission = (answers) => {
    let map = {};
    let result = [];
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] in map) {
        map[answers[i]] += 1;
      } else {
        map[answers[i]] = 1;
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
    <>
      <MainContainer>
        <QuestionContainer>
          <QuestionHeader>
            <QuestionCounter>
              {questionNumber} / {TOTAL_QUESTIONS}
            </QuestionCounter>
          </QuestionHeader>
          <QuestionTitle>{Questions[questionIndex].question}</QuestionTitle>
          <AnswerContainer>
            <AnswerButton
              onClick={() =>
                handleAnswerClick(Questions[questionIndex].answers[0].type)
              }
            >
              {Questions[questionIndex].answers[0].content}
            </AnswerButton>
            <AnswerButton
              onClick={() =>
                handleAnswerClick(Questions[questionIndex].answers[1].type)
              }
            >
              {Questions[questionIndex].answers[1].content}
            </AnswerButton>
          </AnswerContainer>
        </QuestionContainer>
      </MainContainer>
    </>
  );
}

export default QuestionPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 390px;
  height: 100vh;
  box-sizing: border-box;
  background-color: #fdfdfd;
  margin: 0 auto;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const QuestionHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const QuestionCounter = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

const QuestionTitle = styled.h1`
  font-size: 21px;
  padding: 14px;
  text-align: center;
  margin-bottom: 20px;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AnswerButton = styled.button`
  height: 55px;
  width: 70%;
  padding: 5px;
  margin: 7px 0;
  font-size: 18px;
  cursor: pointer;
  border: 1px solid #025d00;
  border-radius: 10px;
  background-color: #fff;

  &:hover {
    box-shadow: -2px -2px #bababa;
    color: #fff;
    background-color: #025d00;
  }
`;
