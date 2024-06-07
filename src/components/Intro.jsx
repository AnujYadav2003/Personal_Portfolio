import React from 'react';

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 bg-cyan-950 p-4">
      <div className="text-4xl sm:text-5xl font-bold mb-4 mt-12 text-white">Hi There!</div>
      <div className="text-3xl sm:text-4xl font-semibold mb-2 text-green-400 mt-4 text-center">I'm Anuj Yadav</div>
      <div className="text-2xl sm:text-4xl text-center font-medium text-sky-400 mt-6">
        Competitive Programmer || Web Developer || Coding Enthusiast
      </div>
      <div className="mt-10 text-lg sm:text-xl text-center text-stone-200">
        <p>I'm a Final Year Computer Science Engineering Student at IET, Lucknow.</p>
        <p>Primarily interested in Web Development and Software Development.</p>
        <p className="mt-4">I enjoy learning new skills and implementing them in real life!</p>
      </div>
      <div className="mt-10 sm:mt-20 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a href="mailto:foranujyadav@gmail.com" target="_blank" rel="noopener noreferrer">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 text-lg sm:text-2xl hover:text-green-500">
            Get in Touch
          </button>
        </a>
        <a href="https://drive.google.com/file/d/17mM195iKhurS9S6oGyIHdGA8h_lkrZ8G/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 text-lg sm:text-2xl hover:text-green-500">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Intro;
