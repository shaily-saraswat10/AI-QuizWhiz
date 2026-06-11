import {
  FaChartLine,
  FaUserGraduate,
  FaBookOpen,
  FaLightbulb, 
} from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";

function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="relative z-10 w-full px-4 py-16 md:py-12 text-center dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="group relative inline-block">
              <p className="text-base font-medium pt-5 text-gray-600 dark:text-gray-300 flex items-center gap-2">
                <span className="relative">
                  Our Origin Story
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-500 group-hover:w-full transition-all duration-500"></span>
                </span>
              </p>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-100 dark:bg-indigo-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-snug md:leading-tight mb-6">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Smarter
            </span>{" "}
            Learning Experiences
          </h1>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mx-auto w-full max-w-2xl">
            QuizWhiz was born from a simple idea: learning should adapt to you—
            not the other way around. We combine artificial intelligence with
            engaging design to make knowledge acquisition effortless and
            enjoyable.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative z-10 py-16  dark:bg-black ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaLightbulb className="text-2xl text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-blue-100 mb-6">
                To make learning accessible, engaging, and effective for
                everyone - from students preparing for exams to lifelong
                learners exploring new topics.
              </p>
              <p className="text-blue-100">
                We believe education shouldn't be one-size-fits-all. That's why
                we built QuizWhiz to adapt to your unique learning style and
                pace.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="relative z-10 py-20 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              How QuizWhiz Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Getting started is simple and effective
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 h-full w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600 top-0 md:left-1/2 md:-ml-0.5"></div>

              <div className="space-y-8">
                {[
                  {
                    icon: <FaBookOpen className="text-xl text-white" />,
                    title: "Choose Your Topic",
                    description:
                      "Select from hundreds of topics or enter your own custom subject",
                    bg: "bg-blue-500",
                  },
                  {
                    icon: <FaUserGraduate className="text-xl text-white" />,
                    title: "Set Difficulty",
                    description:
                      "Pick your challenge level or let our AI adapt to your skill",
                    bg: "bg-purple-500",
                  },
                  {
                    icon: <FaChartLine className="text-xl text-white" />,
                    title: "Track Progress",
                    description:
                      "See detailed analytics on your performance and growth",
                    bg: "bg-indigo-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-16 md:pl-0 md:flex md:odd:flex-row-reverse"
                  >
                    <div className="md:w-1/2 md:px-8">
                      <div
                        className={`${item.bg} w-10 h-10 rounded-full flex items-center justify-center absolute left-0 top-0 md:left-1/2 md:-ml-5`}
                      >
                        {item.icon}
                      </div>
                      <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/90 dark:border-gray-600">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="relative z-10 py-20 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are mastering new topics with
              QuizWhiz.
            </p>
            <a
              href="/"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
            >
              Try QuizWhiz Now
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;