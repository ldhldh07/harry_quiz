// src/components/Quiz.tsx
import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Question, questionsPhilosophersStone } from '../data/philoshphersStone';
import { questionsChamberOfSecrets } from '../data/chamberofsecrets';
import { questionsPrisonerOfAzkaban } from '../data/prisonerOfAzkaban';

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
`;

const QuestionCard = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2em;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const Quiz: React.FC = () => {
  const { series } = useParams<{ series: string }>(); // URL 파라미터로 시리즈 이름을 받아옴
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answer, setAnswer] = useState('');

  // 시리즈에 따른 문제 데이터 선택
  let questions: Question[] = [];
  if (series === 'philosophersStone') {
    questions = questionsPhilosophersStone;
  } else if (series === 'chamberOfSecrets') {
    questions = questionsChamberOfSecrets;
  } else if (series === 'prisonerOfAzkaban') {
    questions = questionsPrisonerOfAzkaban;
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const current = questions[currentQuestion];
    const isCorrect = answer.trim().toLowerCase() === current.answer.trim().toLowerCase();

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setAnswer('');
    } else {
      setShowScore(true);
    }
  };

  return (
    <QuizContainer>
      {showScore ? (
        <div>
          <h1>퀴즈 완료!</h1>
          <p>
            점수: {score} / {questions.length}
          </p>
        </div>
      ) : (
        <QuestionCard onSubmit={handleSubmit}>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options ? (
            questions[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="answer"
                  value={option}
                  onChange={(e) => setAnswer(e.target.value)}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))
          ) : (
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="정답을 입력하세요"
              required
            />
          )}
          <SubmitButton type="submit">제출</SubmitButton>
        </QuestionCard>
      )}
    </QuizContainer>
  );
};

export default Quiz;