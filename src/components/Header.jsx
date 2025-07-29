const Header = ({ name, setName, score }) => (
  <header className="fixed py-3 top-0 left-0 w-full bg-white z-50">
    <div className="flex justify-center items-center">
      <h1 className="bg-gray-100 px-14 md:px-24 py-2 rounded-4xl text-xl font-sketch font-bold">
        Rounding Off to Nearest 10
      </h1>
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
  </header>
);

export default Header;