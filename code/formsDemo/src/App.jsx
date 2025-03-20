import React from 'react'
import './App.css'
import Controlled from './components/Controlled'
import Uncontrolled from './components/Uncontrolled'
function App() {
  return (
		<div>
			<h2>controlled:</h2>
			<Controlled />
			<h2>Uncontrolled:</h2>
			<Uncontrolled />
		</div>
	)
}

export default App
