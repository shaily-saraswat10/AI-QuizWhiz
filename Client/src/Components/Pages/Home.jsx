import { React, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const navigate = useNavigate();

  const handleTopicClick = () => {
    localStorage.setItem("selectedTopic", selectedTopic);
    navigate("/Quiz");
  };
  const handleTopicButtonClick = (topic) => {
    localStorage.setItem("selectedTopic", topic);
    navigate("/Quiz");
  };

  const handleGenerateClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative z-10 dark:bg-black w-full px-4 py-8 sm:pl-20 md:py-24 text-center backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-4 py-2 mb-6 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-full border border-white/50 dark:border-gray-700 shadow-sm">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center justify-center gap-2">
              <IoMdRocket className="text-lg" /> The smart way to learn
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
            Learn Smarter with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
              QuizWhiz
            </span>
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            AI-powered quizzes tailored to your interests. Challenge yourself,
            track progress, and make learning fun!
          </p>

          <div className="flex flex-col items-center justify-center mt-8">
            <div className="flex w-full max-w-2xl group transition-all duration-300 hover:scale-[1.02] focus-within:scale-[1.02] rounded-xl shadow-lg bg-white/50 dark:bg-slate-950 backdrop-blur-md border border-white/70 dark:border-gray-700 overflow-hidden">
              <input
                type="text"
                value={selectedTopic}
                onChange={(e) => {
                  setSelectedTopic(e.target.value);
                }}
                placeholder="What do you want to learn today?"
                className="flex-grow px-6 py-4 bg-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
              />
              <button
                className="hidden sm:flex px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold items-center gap-2 transition-all hover:from-blue-600 hover:to-indigo-700"
                onClick={handleTopicClick}
              >
                Start Quiz <FaArrowRight />
              </button>
            </div>
            <button
              className="mt-2 sm:hidden px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full flex items-center justify-center gap-2 transition-all hover:from-blue-600 hover:to-indigo-700"
              onClick={handleTopicClick}
            >
              Start Quiz <FaArrowRight />
            </button>

            <div className="mt-8">
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Popular topics:
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "Math Basics",
                  "World History",
                  "Physics Principles",
                  "Computer Science",
                  "Music Genres",
                  "Countries & Capitals",
                  "Biology Facts",
                  "Chemistry Elements",
                  "Literary Classics",
                  "Programming Fundamentals",
                  "English Grammar",
                  "Psychology 101",
                  "Space Exploration",
                  "Business Studies",
                  "Human Anatomy",
                  "Languages & Cultures",
                  "Current Affairs",
                  "Environmental Science",
                ].map((topic) => (
                  <button
                    key={topic}
                    onClick={()=>{
                      setSelectedTopic(topic);
                      handleTopicButtonClick(topic);
                    }}

                    className="px-4 py-2 bg-white/70 dark:bg-slate-950 text-gray-800 dark:text-gray-200 font-medium rounded-lg border border-black/90 dark:border-gray-900 shadow-sm hover:bg-white dark:hover:bg-slate-900 hover:shadow-md transition-all duration-200 text-sm backdrop-blur-sm hover:scale-105"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
