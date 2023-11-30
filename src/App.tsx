import './App.css'
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/index.js';
import { useState } from 'react';
import styled from "styled-components";
import HeroSection from './components/HeroSection/index';
import Skills from './components/Skills';
import Projects from './components/Projects/index.js';
import Education from './components/Education/index.js';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';



const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection/>
          <Wrapper>
            <Skills/>
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education/>
            <Contact/>
          </Wrapper>
          <Footer/>
        </Body>
      </Router>
      </ThemeProvider>
    </>
  )
}

export default App
