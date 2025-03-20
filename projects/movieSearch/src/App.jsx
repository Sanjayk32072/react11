import './App.css'
import React, { useEffect, useState } from 'react'

function App ()
{
  const [movieName, setMovieName] = useState('')
  const [isButtonClicked, setButtonClicked] = useState(false)
  const [movies, setMovies] = useState([])
  useEffect(function ()
  {
    if (isButtonClicked)
    {
      fetch(`https://www.omdbapi.com/?apikey=4d06c0bb&s=${movieName}`)
        .then((res) => res.json())
        .then((data) => { setMovies(data.Search); setButtonClicked(false)})
        .catch((err) => console.log(err))
    }
  },[isButtonClicked])
  return (
		<>
			<div>
				<input
					type='text'
					placeholder='Enter movie name'
					value={movieName}
					onChange={(e) => setMovieName(e.target.value)}
				/>
				<button onClick={() => setButtonClicked(true)}>search</button>
      </div>
      <div className="movies">
        {
          movies.map((v,i) => (
              <div className='movie border-2 rounded shadow-cyan-200 p-4 flex flex-col justify-center items-center text-center' key={i}>
                 <img src={v.Poster} alt={v.Title} />
                 <h2>{v.Title}</h2>
                 <p><strong>Year:</strong>{v.Year}</p>
              </div>
            ))
          }
      </div>
		</>
	)
}

export default App
