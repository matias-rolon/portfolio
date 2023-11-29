import './App.css'
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/index.js';
import { useState } from 'react';



function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
      </Router>
      </ThemeProvider>
    </>
  )
}

export default App
