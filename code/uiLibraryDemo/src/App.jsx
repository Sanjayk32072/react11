import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Box } from '@mui/material'
function App() {
  return (
		<div>
			<Navbar
				bg='dark'
				data-bs-theme='dark'>
				<Container>
					<Navbar.Brand>PRASAD</Navbar.Brand>
					<Nav>
						<Nav.Link
							href=''
							className=' text-white'>
							Home
						</Nav.Link>
						<Nav.Link href=''>About</Nav.Link>
						<Nav.Link href=''>Projects</Nav.Link>
						<Nav.Link href=''>contact</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<Box sx={{ minWidth: 275 }}>
				<Card variant='outlined'>
					<CardContent>This is my card</CardContent>
				</Card>
      </Box>
      <h2 className=' text-3xl text-blue-500'>hello world</h2>
		</div>
	)
}

export default App
