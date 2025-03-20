import React from 'react'
<<<<<<< HEAD
import { SocialIcon } from 'react-social-icons'
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

function Home() {
  return (
		<div className=' flex gap-2 mx-auto'>
			<div className='leftBanner flex flex-col gap-8 justify-center'>
				<h1 className=' text-5xl'>
					Hi, Everyone 👋🏻,I'm{" "}
					<span className=' text-purple-500'>FULL STACK WEB DEVELOPER</span>
				</h1>
				<p className=' text-3xl'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
					quia eos ullam, minus deserunt vero. Odit velit iusto aspernatur
					laudantium?
				</p>
				<div className='buttons flex gap-5'>
					<button className=' bg-black text-white text-2xl py-5 px-10 rounded-2xl'>
						Hire me
					</button>
					<button className=' bg-transparent text-black text-2xl py-5 px-10 rounded-2xl'>
						<a href='resume.pdf' download>Download My Resume</a>
					</button>
				</div>
				<div className='socialLinks'>
					<SocialIcon url='https://github.com/prasad-bigdp' />
					<SocialIcon url='https://linkedin.com' />
				</div>
			</div>
			<div className='rightBanner'>
				<DotLottieReact
					src='https://lottie.host/6228da87-475c-4695-bd66-1bb6cd1cace1/EIs9cBDHis.lottie'
					loop
					autoplay
					className='anime'
				/>
			</div>
		</div>
	)
=======

function Home() {
  return (
    <div>
      <h1>I'm Home Page</h1>
    </div>
  )
>>>>>>> 8ac4142929d8ddc85ecb0a07f7059e1cc7a0754a
}

export default Home
