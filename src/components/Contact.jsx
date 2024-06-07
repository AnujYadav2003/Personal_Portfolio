import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen bg-cyan-950">
      <div className="text-5xl font-bold mb-4 text-orange-300 mt-28">Get in Touch</div>
      <div className="text-center mt-12 text-2xl text-stone-200">
        <p>My inbox is always open. Whether you have a question or just want to say</p>
        <p>hello, I'll try my best to get back to you! Feel free to mail me about any</p>
        <p>relevant job updates.</p>
      </div>
      <div className="flex justify-center mt-24 space-x-12 ">
        <a href="mailto:foranujyadav@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className='transform transition-transform hover:scale-110'
            src="https://img.icons8.com/color/48/gmail-new.png"
            alt="Gmail Logo"
            width="72"
            height="72"
          />
        </a>
        <a href="https://www.linkedin.com/in/anujyadav25/" target="_blank" rel="noopener noreferrer">
          <img className='transform transition-transform hover:scale-110'
            src="https://img.icons8.com/color/48/linkedin.png"
            alt="LinkedIn Logo"
            width="72"
            height="72"
          />
        </a>
        <a href="https://github.com/AnujYadav2003" target="_blank" rel="noopener noreferrer">
          <img className='transform transition-transform hover:scale-110'
            src="https://img.icons8.com/ios-filled/100/github.png"
            alt="GitHub Logo"
            width="72"
            height="72"
          />
        </a>
      </div>
      <div className="text-center mt-32 text-gray-200">
        <p>Designed and Developed by Anuj Yadav</p>
        <p>© Anuj_Yadav. All rights reserved.</p>
        <p>Copyright © 2024</p>
      </div>
    </div>
  );
}

export default Contact;
