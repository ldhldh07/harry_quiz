// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Quiz from './components/Quiz';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin: 1rem;
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

const Home: React.FC = () => {
  const navigate = useNavigate();

  // 시리즈 선택 시 해당 시리즈로 이동
  const handleSeriesSelect = (series: string) => {
    navigate(`/quiz/${series}`);
  };

  return (
    <AppContainer>
      <h1>해리포터 퀴즈 선택</h1>
      <Button onClick={() => handleSeriesSelect('philosophersStone')}>마법사의 돌</Button>
      <Button onClick={() => handleSeriesSelect('chamberOfSecrets')}>비밀의 방</Button>
      <Button onClick={() => handleSeriesSelect('prisonerOfAzkaban')}>아즈카반의 죄수</Button>
    </AppContainer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:series" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default App;