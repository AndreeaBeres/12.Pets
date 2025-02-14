import React, { useEffect } from 'react';
import './Quizzes.css'; // Import the CSS file for Quiz component

function Quizzes() {
  useEffect(() => {
    // Fade-in animation for questions
    setTimeout(() => document.getElementById("q1").classList.add("opacity-100", "translate-y-0"), 100);
    setTimeout(() => document.getElementById("q2").classList.add("opacity-100", "translate-y-0"), 200);
    setTimeout(() => document.getElementById("q3").classList.add("opacity-100", "translate-y-0"), 300);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const time = document.querySelector('input[name="time"]:checked');
    const money = document.querySelector('input[name="money"]:checked');
    const responsibility = document.querySelector('input[name="responsibility"]:checked');
    const result = document.getElementById("result");

    if (time && money && responsibility) {
      let score = 0;
      if (time.value === "yes") score++;
      if (money.value === "yes") score++;
      if (responsibility.value === "love") score++;

      if (score === 3) {
        result.textContent = "You are ready for a pet!";
      } else if (score === 2) {
        result.textContent = "You might manage a low-maintenance pet.";
      } else {
        result.textContent = "A pet may not be the best choice for you right now.";
      }

      result.classList.remove("hidden");
      result.classList.add("animate-fadeIn");
    } else {
      result.textContent = "Please answer all questions.";
      result.classList.remove("hidden");
    }
  };

  return (
    <section className="quiz-section">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Should You Get a Pet?</h2>
      <p className="text-gray-600 mb-6 text-center">Answer the questions below and find out!</p>

      <form id="quiz-form" className="space-y-6" onSubmit={handleSubmit}>
        <div className="opacity-0 transform translate-y-5 transition-all duration-500" id="q1">
          <img src="https://source.unsplash.com/400x250/?dog,cat" alt="Pets" className="w-full h-40 object-cover rounded-lg shadow-md mb-3" />
          <label className="text-lg font-medium text-gray-700 block mb-2">Do you have time for a pet?</label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="time" value="yes" className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">Yes, I have plenty of time</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="time" value="some" className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">I have some free time</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="time" value="no" className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">No, I’m always busy</span>
            </label>
          </div>
        </div>

        <div className="opacity-0 transform translate-y-5 transition-all duration-500" id="q2">
          <img src="https://source.unsplash.com/400x250/?money,wallet" alt="Money" className="w-full h-40 object-cover rounded-lg shadow-md mb-3" />
          <label className="text-lg font-medium text-gray-700 block mb-2">Are you financially prepared for a pet?</label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="money" value="yes" className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">Yes, I can afford pet care</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="money" value="maybe" className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">Maybe, I need to budget better</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="money" value="no" className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">No, I can’t afford a pet right now</span>
            </label>
          </div>
        </div>

        <div className="opacity-0 transform translate-y-5 transition-all duration-500" id="q3">
          <img src="https://source.unsplash.com/400x250/?responsibility,planner" alt="Responsibility" className="w-full h-40 object-cover rounded-lg shadow-md mb-3" />
          <label className="text-lg font-medium text-gray-700 block mb-2">Do you like responsibility?</label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="responsibility" value="love" className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">I love responsibility</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="responsibility" value="okay" className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">I’m okay with it</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="responsibility" value="hate" className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">I hate responsibility</span>
            </label>
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 hover:scale-105 transition">
          Submit
        </button>
      </form>

      <p id="result" className="text-center text-gray-700 font-medium mt-4 hidden"></p>
    </section>
  );
}

export default Quizzes;