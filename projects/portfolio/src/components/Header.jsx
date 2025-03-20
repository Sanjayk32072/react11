<<<<<<< HEAD
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../main'
function Header ()
{
	const { theme, toggleTheme } = useContext(ThemeContext)
=======
import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
>>>>>>> 8ac4142929d8ddc85ecb0a07f7059e1cc7a0754a
  return (
		<div className=' py-4 text-white md:py-6 lg:py-8 flex justify-center'>
			<nav className='  bg-gray-900 rounded-3xl py-4 px-8 flex gap-8 shadow-lg shadow-purple-300 animate-bounce'>
				<Link
					to=''
					className=' hover:text-purple-500 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl'>
					Home
				</Link>
				<Link
					to='/about'
					className=' hover:text-purple-500 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl'>
					About
				</Link>
				<Link
					to='/projects'
					className=' hover:text-purple-500 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl'>
					Projects
				</Link>
				<Link
					to='/contact'
					className=' hover:text-purple-500 hover:-translate-y-1.5 text-xl md:text-3xl lg:text-4xl'>
					Contact
				</Link>
<<<<<<< HEAD
				<button onClick={() => toggleTheme("dark")}>
					{theme == "light" ? "☀️" : "🌙"}
				</button>
=======
>>>>>>> 8ac4142929d8ddc85ecb0a07f7059e1cc7a0754a
			</nav>
		</div>
	)
}

export default Header
