import React from 'react'
import About from './About'
import { useNavigate } from 'react-router-dom'
function Home ()
{
    const navigate = useNavigate()
    function handlePage ()
    {
        setTimeout(() =>
        {
           navigate("/about") 
       },5000)
    }
  return (
    <div>
          <h1>This is my home page</h1>
          <button onClick={handlePage} className=' bg-emerald-400 p-2 text-white rounded-2xl'>Go to About page</button>
    </div>
  )
}

export default Home
