import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { createContext } from 'react'
<<<<<<< HEAD
export const ThemeContext = createContext()
createRoot(document.getElementById("root")).render(
	<BrowserRouter>
			<App />
=======
import { useState } from 'react'
const themeContext = createContext()
createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<themeContext.Provider value={{}}>
			<App />
		</themeContext.Provider>
>>>>>>> 8ac4142929d8ddc85ecb0a07f7059e1cc7a0754a
	</BrowserRouter>,
)
