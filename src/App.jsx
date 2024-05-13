import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import StartQuizPage from "./StartQuizPage";
import QuizPage from "./QuizPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startpage" element={<StartQuizPage />} />
          <Route path="/startpage/quizpage" element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
