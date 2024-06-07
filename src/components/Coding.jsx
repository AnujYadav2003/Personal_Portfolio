import React from 'react';
// Import your images here
import img1 from '../images/leetcode.png';
import img2 from '../images/codeforces.png';
import img3 from '../images/codechef.jpg';
import img4 from '../images/gfg.jpg';

const Profile = () => {
    return (
        <div id="coding" className='bg-cyan-950 p-6 min-h-screen'>
            <div className="text-5xl font-semibold mb-24 flex justify-center hover:underline text-gray-200 mt-20 hover:text-green-500 ">Coding Profile</div>
            <div className="flex justify-center items-center min-h-screen px-2">
                <div className="max-w-5xl w-full">
                    <div className="flex flex-wrap justify-center">
                        {/* First Card */}
                        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                            <div className="rounded-lg shadow-xl p-2 flex flex-col items-center bg-cyan-900 transform transition-transform hover:scale-105" style={{ height: '430px' }}>
                                <img src={img1} alt="Profile 1" className="w-72 h-40 rounded-md mb-4 mt-8" />
                                <div className='text-stone-200'>
                                    <p className='mt-1 ml-16 text-fuchsia-300 font-bold text-2xl'>Rating : 1610</p>
                                    <p className='mt-1 ml-16 text-fuchsia-300 font-bold text-2xl'>Badge : 3 STAR</p>
                                    <p className='mt-1'>Solved 440+ Problems of various Data Structures like Array, String, Linked List, Tree, and many more ...</p>
                                </div>
                                <div className='flex space-x-24 mt-6'>
                                    <a href="https://leetcode.com/u/Anuj_21/" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-purple-900 text-white px-5 py-2 rounded-lg hover:bg-lime-600 transition duration-300">
                                            View Profile
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Second Card */}
                        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                            <div className="rounded-lg shadow-xl p-2 flex flex-col items-center bg-cyan-900 transform transition-transform hover:scale-105" style={{ height: '430px' }}>
                                <img src={img2} alt="Profile 2" className="w-72 h-40 rounded-md mb-4 mt-6" />
                                <div className='text-stone-200'>
                                    <p className='mt-1 ml-16 text-fuchsia-300 font-bold text-2xl'>Rating : 1350</p>
                                    <p className='mt-1 ml-16 text-fuchsia-300 font-bold text-2xl'>Badge : PUPIL</p>
                                    <p className='mt-1'>Solved 440+ Brain Storming Problems on various mixture of Data Structure.</p>
                                    <p className='mt-1'>Secured rank 366th in- ’Codeforces Round 928 Div-4’.</p>
                                </div>
                                <div className='flex space-x-24 mt-2'>
                                    <a href="https://codeforces.com/profile/Anuj_21" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-purple-900 text-white px-5 py-2 rounded-lg hover:bg-lime-600 transition duration-300">
                                            View Profile
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Third Card */}
                        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                            <div className="rounded-lg shadow-xl p-2 flex flex-col items-center bg-cyan-900 transform transition-transform hover:scale-105" style={{ height: '430px' }}>
                                <img src={img3} alt="Profile 3" className="w-72 h-40 rounded-md mb-4 mt-6" />
                                <div className='text-stone-200'>
                                    <p className='mt-1 ml-16 text-fuchsia-300 font-bold text-2xl'>Rating : 1610</p>
                                    <p className='mt-1 ml-16 text-fuchsia-300 font-bold text-2xl'>Badge : 3 STAR</p>
                                    <p className='mt-1'>Ranked 41th among 8000+ participants in ’Codechef December Long 22 Challenge’.</p>
                                </div>
                                <div className='flex space-x-24 mt-12'>
                                    <a href="https://www.codechef.com/users/anuj_2025" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-purple-900 text-white px-5 py-2 rounded-lg hover:bg-lime-600 transition duration-300">
                                            View Profile
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Fourth Card */}
                        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                            <div className="rounded-lg shadow-xl p-2 flex flex-col items-center bg-cyan-900 transform transition-transform hover:scale-105" style={{ height: '430px' }}>
                                <img src={img4} alt="Profile 4" className="w-72 h-40 rounded-md mb-4 mt-6" />
                                <div className='text-stone-200'>
                                    <p className='mt-1 ml-16 text-fuchsia-300 font-bold text-2xl'>Rank : 167</p>
                                    <p className='mt-1'>Solved 230+ Problems of various Data Structures like Array, String, Linked List, Tree, and many more ...</p>
                                </div>
                                <div className='flex space-x-24 mt-12'>
                                    <a href="https://www.geeksforgeeks.org/user/anujyadav2003/" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-purple-900 text-white px-5 py-2 rounded-lg hover:bg-lime-600 transition duration-300">
                                            View Profile
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
