import React from 'react'
<<<<<<< HEAD
import { FaHtml5 } from "react-icons/fa"
import { FaCss3 } from "react-icons/fa"
import { FaJs } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"

function About() {
  return (
		<div>
			<h2 className=' text-4xl text-center text-decoration-underline decoration-1 decoration-wavy decoration-purple-500 my-10'>
				About me
			</h2>
			<div className=' border rounded-3xl shadow-2xl shadow-purple-500 mb-5 flex flex-col gap-10 p-20'>
				<p className=' text-justify text-2xl '>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
					deleniti explicabo molestiae facilis dicta veritatis quisquam culpa
					repellendus voluptatibus architecto dolore necessitatibus maxime
					facere, et fugit est eveniet laudantium vero nostrum blanditiis
					maiores! Consequuntur magni, id iure consectetur, ipsum quis
					blanditiis neque laudantium deserunt expedita nesciunt asperiores
					eligendi. Voluptatibus, earum.
				</p>
				<div className=' flex gap-3'>
					<FaHtml5 size='5em' />
					<FaCss3 size='5em' />
					<FaJs size='5em' />
					<FaReact size='5em' />
					<SiTypescript size='5em' />
					<RiTailwindCssFill size='5em' />
				</div>
			</div>
		</div>
	)
=======

function About() {
  return (
    <div>
      <h1>I'm about page</h1>
    </div>
  )
>>>>>>> 8ac4142929d8ddc85ecb0a07f7059e1cc7a0754a
}

export default About
