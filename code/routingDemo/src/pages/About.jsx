import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function About() {
  return (
		<div>
			<Outlet />
			<h1>This is about component</h1>
			<Outlet />
			<Link to='contact'>contact</Link>
		</div>
	)
}

export default About
