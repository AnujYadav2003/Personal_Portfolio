import React from 'react';
// Import your images here
import img1 from '../images/paytm.png';
import img2 from '../images/tictactoe.png';
import img3 from '../images/calci.png';
import img4 from '../images/amazon.png';
import img5 from '../images/weather.png';

const Project = () => {
  return (
    <div id="project" className="bg-cyan-950 p-6 min-h-screen">
      <div className="text-5xl font-semibold mb-24 flex justify-center hover:underline text-gray-200 mt-20 hover:text-green-500 ">Project</div>
      <div className="flex flex-col items-center min-h-screen px-4">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col md:flex-row justify-center">
            {/* First Card */}
            <div className="w-full md:w-1/2 md:pr-4 mb-8">
              <div className="rounded-lg shadow-xl p-2 flex flex-col items-center bg-cyan-900 transform transition-transform hover:scale-105" style={{ height: '440px' }}>
                <div className="text-2xl text-yellow-500">Weather Application</div>
                <img src={img5} alt="Project 1" className="w-72 h-40 rounded-md mb-4 mt-4" style={{ borderRadius: '10px' }} />
                <div className="text-stone-200">
                  <div className="text-center text-amber-200">Html || CSS || Javascript</div>
                  <p className="mt-1">Streamlined interface for effortless access to weather details, user satisfaction, and engagement.</p>
                  <p>Accurate temperature, humidity, and wind speed details.</p>
                  <p className="mt-1">Instantly see current time and date of the selected city.</p>
                </div>
                <div className="flex space-x-4 mt-10">
                  <a href="https://github.com/AnujYadav2003/Weather_App" target="_blank" rel="noopener noreferrer">
                    <button className="bg-purple-900 text-white px-5 py-2 rounded-lg hover:bg-lime-600 transition duration-300">
                      View Project
                    </button>
                  </a>
                  <a href="https://weather-app-sandy-three-30.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="bg-purple-900 text-white px-6 py-2 rounded-lg hover:bg-lime-600 transition duration-300">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Second Card */}
            <div className="w-full md:w-1/2 md:pl-4 mb-8">
              <div className="rounded-lg shadow-xl p-2 flex flex-col items-center bg-cyan-900 transform transition-transform hover:scale-105" style={{ height: '440px' }}>
                <div className="text-2xl text-yellow-500">Wallet Whirl</div>
                <img src={img1} alt="Project 2" className="w-72 h-40 rounded-md mb-4 mt-4" style={{ borderRadius: '10px' }} />
                <div className="text-stone-200">
                  <div className="text-center text-amber-200">
                    JavaScript || React || Tailwind || MongoDB
                  </div>
                  <div className="text-center text-amber-200">
                    || Express || NodeJs
                  </div>
                  <p>Handles SignIn, SignUp, transactions, and money transfers efficiently for building a robust web application, ensuring scalability and flexibility.</p>
                  <p>Employs ZOD data validation and JWT for secure authentication, ensuring data integrity and user privacy.</p>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a href="https://github.com/AnujYadav2003/MERN-Paykro" target="_blank" rel="noopener noreferrer">
                    <button className="bg-purple-900 text-white px-5 py-2 rounded-lg hover:bg-lime-600 transition duration-300">
                      View Project
                    </button>
                  </a>
                  <a href="https://mern-paykro.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="bg-purple-900 text-white px-6 py-2 rounded-lg hover:bg-lime-600 transition duration-300">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl w-full mt-8">
          <div className="flex flex-col md:flex-row justify-center">
            {/* Third Card */}
            <div className="w-full md:w-1/2 md:pr-4 mb-8">
              <div className="rounded-lg shadow-xl p-2 flex flex-col items-center bg-cyan-900 transform transition-transform hover:scale-105" style={{ height: '440px' }}>
                <div className="text-2xl text-yellow-500">Tic-Tac-Toe Game</div>
                <img src={img2} alt="Project 3" className="w-72 h-40 rounded-md mb-4 mt-4" style={{ borderRadius: '10px' }} />
                <div className="text-stone-200">
                  <div className="text-center text-amber-200">Html || CSS || Javascript</div>
                  <p className="mt-2">The game allows two players to play the classic XO (Tic-Tac-Toe) game together in real-time.</p>
                  <p className="mt-1">The app aims to create a seamless and engaging gaming experience with a simple architecture and a focus on real-time functionality.</p>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a href="https://github.com/AnujYadav2003/Tic-Tac-Toe-Game" target="_blank" rel="noopener noreferrer">
                    <button className="bg-purple-900 text-white px-5 py-2 rounded-lg hover:bg-lime-600 transition duration-300">
                      View Project
                    </button>
                  </a>
                  <a href="https://tic-tac-toe-game-seven-sage.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="bg-purple-900 text-white px-6 py-2 rounded-lg hover:bg-lime-600 transition duration-300">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Fourth Card */}
            <div className="w-full md:w-1/2 md:pl-4 mb-8">
              <div className="rounded-lg shadow-xl p-2 flex flex-col items-center bg-cyan-900 transform transition-transform hover:scale-105" style={{ height: '440px' }}>
                <div className="text-2xl text-yellow-500">Calculator</div>
                <img src={img3} alt="Project 4" className="w-72 h-40 rounded-md mb-4 mt-4" style={{ borderRadius: '10px' }} />
                <div className="text-stone-200">
                  <div className="text-center text-amber-200">Html || CSS || Javascript</div>
                  <p className="mt-1">This online calculator performs basic mathematical operations like addition, subtraction, division, and multiplication.</p>
                  <p className="mt-2">The Calculator is a powerful and user-friendly desktop application</p>
                </div>
                <div className="flex space-x-4 mt-12">
                  <a href="https://github.com/AnujYadav2003/Calculator" target="_blank" rel="noopener noreferrer">
                    <button className="bg-purple-900 text-white px-5 py-2 rounded-lg hover:bg-lime-600 transition duration-300">
                      View Project
                    </button>
                  </a>
                  <a href="https://calculator-lemon-pi.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="bg-purple-900 text-white px-6 py-2 rounded-lg hover:bg-lime-600 transition duration-300">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center">
            {/* Fifth Card */}
            <div className="w-full md:w-1/2 md:pr-4 mb-8">
              <div className="rounded-lg shadow-xl p-2 flex flex-col items-center bg-cyan-900 transform transition-transform hover:scale-105" style={{ height: '440px' }}>
                <div className="text-2xl text-yellow-500">Amazon Clone</div>
                <img src={img4} alt="Project 5" className="w-72 h-40 rounded-md mb-4 mt-2" style={{ borderRadius: '10px' }} />
                <div className="text-stone-200">
                  <div className="text-center text-amber-200">Html || CSS || Javascript</div>
                  <p className="mt-1">The "Amazon Clone" is a static website project developed using HTML and CSS aimed at replicating the user interface and design of the renowned e-commerce platform, Amazon.</p>
                  <p className="mt-2">This static version serves as a hands-on exercise to showcase front-end web development skills.</p>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a href="https://github.com/AnujYadav2003/Amazon_Clone" target="_blank" rel="noopener noreferrer">
                    <button className="bg-purple-900 text-white px-5 py-2 rounded-lg hover:bg-lime-600 transition duration-300">
                      View Project
                    </button>
                  </a>
                  <a href="https://amazon-clone-kohl.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="bg-purple-900 text-white px-6 py-2 rounded-lg hover:bg-lime-600 transition duration-300">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Placeholder for additional cards */}
            <div className="w-full md:w-1/2 md:pl-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
