import React from 'react';

const Header = () => {
  return (
    <div className='bg-cyan-950 fixed top-0 left-0 w-full z-10 shadow-md'> {/* Add bg-black class for black background */}
      <div className='mx-8'>
        <div className='inline-flex justify-between items-center w-full py-4'>
          <h1 className='text-4xl -my-1 mx- font-bold text-orange-300 transform transition-transform hover:scale-110 hover:text-green-600'>Anuj Yadav</h1> {/* Move "Anuj Yadav" to the left */}
          <div className='flex space-x-8'>
            <a href="#aboutme" ><h1 className='text-xl hover:underline hover:text-green-500 text-white'>About Me</h1></a>
            <a href="#skills" ><h1 className='text-2xl hover:underline hover:text-green-500 text-white'>Skills </h1></a>
            <a href="#project" ><h1 className='text-2xl hover:underline hover:text-green-500 text-white'>Project</h1></a>
            <a href="#coding" ><h1 className='text-2xl hover:underline hover:text-green-500 text-white'>Coding Profile</h1></a>
            <a href="#contact"><h1 className='text-2xl hover:underline hover:text-green-500 text-white'>Contact</h1></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
