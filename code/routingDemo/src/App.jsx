
import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='About' element={<About />}>
          <Route path='contact' Component={Contact} />
          <Route path='header' Component={Header}/>
        </Route>
        <Route path='contact' Component={Contact} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
