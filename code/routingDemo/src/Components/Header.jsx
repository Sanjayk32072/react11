import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
		<div className=' flex bg-black p-4 text-white justify-between items-center'>
			<h2 className=' text-3xl'>PRASAD</h2>
			<nav>
				<ul className=' flex gap-3 text-2xl'>
					<li>
						<Link
							to=''
							className=' hover:text-blue-300'>
							Home
						</Link>
					</li>
					<li>
						<Link
							to='/about'
							className=' hover:text-blue-300'>
							About
						</Link>
					</li>
					<li>
						<Link
							to='/contact'
							className=' hover:text-blue-300'>
							contact
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header
