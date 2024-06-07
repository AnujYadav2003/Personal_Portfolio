import React from 'react'
import Header from './components/Header';
import Intro from './components/Intro';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Coding from './components/Coding';
const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Aboutme />
      <Skills />
      <Project />
      <Coding />
      <Contact />
    </div>
  )
}

export default App