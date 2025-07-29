import React, { useState } from 'react';
import Header from './components/Header';
import QuestionList from './components/QuestionList';

const App = () => {
  const questions = [
    { questions: "17 rounded off to the nearest 10 is..", options: ["10", "20", "17"], answer: "20" },
    { questions: "45 rounded off to the nearest 10 is..", options: ["50", "45", "40"], answer: "50" },
    { questions: "75 rounded off to the nearest 10 is..", options: ["70", "80", "175"], answer: "80" },
    { questions: "19 rounded off to the nearest 10 is..", options: ["20", "10", "19"], answer: "20" },
    { questions: "64 rounded off to the nearest 10 is..", options: ["64", "70", "60"], answer: "60" },
    { questions: "0 rounded off to the nearest 10 is..", options: ["10", "1", "0"], answer: "0" },
    { questions: "98 rounded off to the nearest 10 is..", options: ["80", "100", "89"], answer: "100" },
    { questions: "199 rounded off to the nearest 10 is..", options: ["190", "100", "200"], answer: "200" },
    { questions: "94 rounded off to the nearest 10 is..", options: ["100", "94", "90"], answer: "90" },
    { questions: "165 rounded off to the nearest 10 is..", options: ["160", "170", "150"], answer: "170" },
    { questions: "445 rounded off to the nearest 10 is..", options: ["450", "440", "500"], answer: "450" },
    { questions: "999 rounded off to the nearest 10 is..", options: ["990", "1,000", "909"], answer: "1,000" },
  ];

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

  return (
    <div className="max-w-4xl mx-auto p-3 font-serif pt-40">
      <Header />
      <QuestionList questions={questions} userAnswers={userAnswers} setUserAnswers={setUserAnswers} />
    </div>
  );
};

export default App;