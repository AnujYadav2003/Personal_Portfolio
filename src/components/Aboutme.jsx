import React from 'react';
import profile from '../images/Profile.jpeg';

const Aboutme = () => {
  return (
    <div id="aboutme" className='flex flex-col items-center justify-center min-h-screen bg-cyan-950 p-4'>
      <div className="text-3xl sm:text-5xl font-semibold mb-4 flex justify-center hover:underline text-gray-200 mt-12 sm:mt-24 hover:text-green-500">
        About Me
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-2/4 p-4 mb-8 text-stone-200 mt-12 sm:mt-24 text-lg sm:text-xl">
          <p className="mb-6">
            I am an undergraduate student pursuing my bachelor's degree in Computer Science (2021-2025).
          </p>
          <p className="mb-6">
            Strong in design and problem-solving, enthusiastic about coding and web development, and easily adaptable to new technology.
          </p>
          <p className="mb-6">
            I have a good knowledge of data structures & algorithm (DSA) and development skills such as HTML, CSS, JavaScript, React, Express, MongoDB, and SQL.
          </p>
          <p className="mb-6">
            I have good knowledge of Operating Systems (OS) and database management systems (DBMS).
          </p>
          <p className="mb-6">
            I have solved 400+ problems on Leetcode and 450+ problems on Codeforces and I am a Pupil on Codeforces.
          </p>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center mt-6">
          <div className="rounded-full overflow-hidden h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 bg-gray-200 flex items-center justify-center">
            <img src={profile} alt="Profile" className="max-h-full max-w-full h-auto w-auto object-cover transform transition-transform hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
