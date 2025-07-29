import React, {useState} from 'react'

const App = () => {
  const questions = [
    {
        questions: "17 rounded off to the nearest 10 is..",
        options: ["10", "20", "17"],
        answer: "20",
    },
    {
        questions: "45 rounded off to the nearest 10 is..",
        options: ["50", "45", "40"],
        answer: "50",
      },
      {
        questions: "75 rounded off to the nearest 10 is..",
        options: ["70", "80", "175"],
        answer: "80",
      },
      {
        questions: "19 rounded off to the nearest 10 is..",
        options: ["20", "10", "19"],
        answer: "20",
      },
      {
        questions: "64 rounded off to the nearest 10 is..",
        options: ["64", "70", "60"],
        answer: "60",
      },
      {
        questions: "0 rounded off to the nearest 10 is..",
        options: ["10", "1", "0"],
        answer: "0",
      },
      {
        questions: "98 rounded off to the nearest 10 is..",
        options: ["80", "100", "89"],
        answer: "100",
      },
      {
        questions: "199 rounded off to the nearest 10 is..",
        options: ["190", "100", "200"],
        answer: "200",
      },
      {
        questions: "94 rounded off to the nearest 10 is..",
        options: ["100", "94", "90"],
        answer: "90",
      },
      {
        questions: "165 rounded off to the nearest 10 is..",
        options: ["160", "170", "150"],
        answer: "170",
      },
      {
        questions: "445 rounded off to the nearest 10 is..",
        options: ["450", "440", "500"],
        answer: "450",
      },
      {
        questions: "999 rounded off to the nearest 10 is..",
        options: ["990", "1,000", "909"],
        answer: "1,000",
    },
  ]

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null))
  const [score, setScore] = useState(null)
  const [name, setName] = useState("")

  return (
    <div className='max-w-4xl mx-auto p-3 font-serif'>
      <div className="fixed py-3 top-0 left-0 w-full bg-white">
        <div className='flex justify-center items-center'>
          <h1 className='bg-gray-100 px-14 md:px-24 py-2 rounded-4xl text-xl font-sketch font-bold'>Rounding Off to Nearest 10</h1>
        </div>
        <div className="flex justify-center my-4 mx-auto">
          <div className="text-sm md:text-lg font-bold">
            <label htmlFor="name" className="mr-2">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b-2 text-sm md:text-lg border-black focus:outline-none w-36 md:w-80"
              />
          </div>
          <div className="pl-8 text-sm md:text-lg font-bold">
            <label htmlFor="score" className="mr-2">Score:</label>
            <input
              id="score"
              type="text"
              value={score !== null ? score : ""}
              readOnly
              className="border-b-2 border-black focus:outline-none w-18 md:w-30"
              />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span>Circle the correct answers.</span>
        </div>
      </div>
      <div className="mt-41 px-4 md:px-10">
        <div className="flex flex-col justify-between gap-6 mt-6 md:grid md:grid-cols-2">
          {questions.map((q, index) => (
            <div key={index} className='flex flex-col rounded-lg p-2 h-full'>
              <p className="mb-2 text-sm md:text-lg">{q.questions}</p>
              <div className="flex-grow flex-col gap-1">
                {q.options.map((opt, j) => (
                  <label key={j} className="flex items-center md:mb-3">
                    <input
                      type="radio"
                      name={`q${index}`}
                      value={opt}
                      onChange={() => {
                        const updated = userAnswers ? [...userAnswers] : Array(questions.length).fill(null)
                        updated[index] = opt
                        setUserAnswers(updated)
                      }}
                      checked={userAnswers?.[index] === opt}
                      className="mr-2"
                      />
                    {String.fromCharCode(97 + j)}<span className='mr-4'>.</span>{opt}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-8 justify-center">
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
            onClick={() => {
              if (!name.trim()) {
                alert("Please enter your name before submitting.");
                return;
              }
              if (!userAnswers || userAnswers.includes(null)) {
                alert("Please answer all questions before submitting.");
                return;
              }
              const correctCount = questions.reduce((acc, q, idx) => {
                return acc + (userAnswers[idx] === q.answer ? 1 : 0);
              }, 0) + "/12";

              setScore(correctCount);
            }}
            >
            Submit
          </button>
          <button
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
            onClick={() => {
              setUserAnswers(null);
              setScore(null);
              setName("");
            }}
            >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App