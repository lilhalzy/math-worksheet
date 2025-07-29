const Buttons = ({
  name,
  userAnswers,
  questions,
  setScore,
  setUserAnswers,
  setName,
  setErrorMessage
}) => {
  const handleSubmit = () => {
    if (!name.trim()) {
      setErrorMessage("Please enter your name before submitting.")
      return
    }
    if (userAnswers.includes(null)) {
      setErrorMessage("Please answer all questions before submitting.")
      return
    }
    const correctCount = questions.reduce(
      (acc, q, idx) => acc + (userAnswers[idx] === q.answer ? 1 : 0),
      0
    )
    setScore(`${correctCount}/12`)
    setErrorMessage(null)
  }

  const handleReset = () => {
    setUserAnswers(Array(questions.length).fill(null));
    setScore(null);
    setName("");
    setErrorMessage(null);
  }

  return (
    <div className="flex gap-4 mt-8 justify-center">
      <button
        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <button
        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  )
}

export default Buttons
