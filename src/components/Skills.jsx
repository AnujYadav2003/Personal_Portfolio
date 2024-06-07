import React from 'react';
import img1 from '../images/clanguage.png';
import img2 from '../images/c++logo.png';
import img3 from '../images/core-java.png';
import img4 from '../images/html-logo.png';
import img5 from '../images/css-logo.png';
import img6 from '../images/js-logo.png';
import img7 from '../images/react-logo.png';
import img8 from '../images/node-logo.png';
import img9 from '../images/mongo-logo.png';
import img10 from '../images/express-logo.png';
import img11 from '../images/postgres-logo.png';
import img12 from '../images/github-logo.png';
import img13 from '../images/vscode-logo.png';

const Skills = () => {
  return (
    <div id="skills" className="p-6 min-h-screen bg-cyan-950">
      <div className="flex flex-col items-center justify-center mt-16">
        <div className="text-4xl sm:text-5xl font-semibold mb-4 hover:underline text-gray-200 mt-4 hover:text-green-500">Skills</div>
      </div>

      <div className="mt-8 text-center">
        <div className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4 hover:underline text-black-200">Programming Languages</div>
        <div className="flex flex-wrap justify-center mt-4 gap-8 sm:gap-16">
          <img
            src={img1}
            alt="Skill 1"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full hover:scale-110 transition duration-300 ease-in-out"
          />
          <img
            src={img2}
            alt="Skill 2"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full hover:scale-110 transition duration-300 ease-in-out"
          />
          <img
            src={img3}
            alt="Skill 3"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="text-2xl sm:text-3xl font-semibold text-green-600 mb-4 hover:underline">Frontend Technologies</div>
        <div className="flex flex-wrap justify-center mt-4 gap-8 sm:gap-16">
          <img
            src={img4}
            alt="Skill 1"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full hover:scale-110 transition duration-300 ease-in-out"
          />
          <img
            src={img5}
            alt="Skill 2"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full hover:scale-110 transition duration-300 ease-in-out"
          />
          <img
            src={img6}
            alt="Skill 3"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full hover:scale-110 transition duration-300 ease-in-out"
          />
          <img
            src={img7}
            alt="Skill 4"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="text-2xl sm:text-3xl font-semibold text-red-600 mb-4 hover:underline">Backend Technologies</div>
        <div className="flex flex-wrap justify-center mt-4 gap-8 sm:gap-16">
          <img
            src={img8}
            alt="Skill 1"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full hover:scale-110 transition duration-300 ease-in-out"
          />
          <img
            src={img9}
            alt="Skill 2"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full hover:scale-110 transition duration-300 ease-in-out"
          />
          <img
            src={img10}
            alt="Skill 3"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full hover:scale-110 transition duration-300 ease-in-out"
          />
          <img
            src={img11}
            alt="Skill 4"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="text-2xl sm:text-3xl font-semibold text-yellow-600 mb-4 hover:underline">Tools</div>
        <div className="flex flex-wrap justify-center mt-4 gap-8 sm:gap-16">
          <img
            src={img12}
            alt="Skill 1"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full hover:scale-110 transition duration-300 ease-in-out"
          />
          <img
            src={img13}
            alt="Skill 2"
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
