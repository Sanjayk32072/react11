<<<<<<< HEAD
import React, { useEffect } from 'react'
=======
import React from 'react'
>>>>>>> 8ac4142929d8ddc85ecb0a07f7059e1cc7a0754a
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
<<<<<<< HEAD
import { ThemeContext } from './main'
import { useState } from 'react'
function App ()
{
		const [theme, setTheme] = useState("light")
		const toggleTheme = () => {
			setTheme(theme == "light" ? "dark" : "light")
    }
  useEffect(() =>
  {
    document.body.className = theme;
  },[theme])
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
=======
function App() {
  return (
    <>
>>>>>>> 8ac4142929d8ddc85ecb0a07f7059e1cc7a0754a
      <Header />
        <Routes>
           <Route path='' element={<Home />} />
           <Route path='about' element={<About />}/>
           <Route path='projects' element={<Projects />}/>
           <Route path='contact' element={<Contact />}/>
        </Routes>
      <Footer />
<<<<<<< HEAD
    </ThemeContext.Provider>
=======
    </>
>>>>>>> 8ac4142929d8ddc85ecb0a07f7059e1cc7a0754a
  )
}

export default App
