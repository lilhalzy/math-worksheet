const QuestionList = ({ questions, userAnswers, setUserAnswers }) => {
  return (
    <div className="mt-6 px-4 md:px-10">
      <div className="flex flex-col justify-between gap-6 md:grid md:grid-cols-2">
        {questions.map((q, index) => (
          <div key={index} className="flex flex-col rounded-lg p-2 h-full">
            <p className="mb-2 text-sm md:text-lg">{q.questions}</p>
            <div className="flex-grow flex-col gap-1">
              {q.options.map((opt, j) => (
                <label key={j} className="flex items-center md:mb-3 cursor-pointer">
                  <input
                    type="radio"
                    name={`q${index}`}
                    value={opt}
                    onChange={() => {
                      const updated = [...userAnswers];
                      updated[index] = opt;
                      setUserAnswers(updated);
                    }}
                    checked={userAnswers?.[index] === opt}
                    className="mr-2"
                  />
                  {String.fromCharCode(97 + j)}<span className="mr-4">.</span>{opt}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;