import React from 'react'
import { useRef } from 'react'
function Uncontrolled ()
{
    const bujji = useRef(null)
    const em = useRef(null)
    const box= useRef(null)
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        console.log(bujji.current.value) 
        console.log(em.current.value) 

    }
  return (
      <>
          <div ref={box} style={{ height: '100px', width: '100px', background: 'red' }}></div>
          <button onClick={()=>box.current.style.transform=' translateX(300px)'}>rotate</button>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					ref={bujji}
					placeholder='Enter name'
				/>
				<input
					type='email'
					ref={em}
					placeholder='Enter email'
				/>
				<input
					type='password'
					placeholder='Enter password'
				/>
				<button>Submit</button>
			</form>
		</>
	)
}

export default Uncontrolled
