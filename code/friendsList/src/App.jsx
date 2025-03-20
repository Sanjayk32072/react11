import './App.css'
import { useState } from 'react';
import Friend from './Friend';
function App ()
{
  const [value, setValue] = useState('');
  const [friends, setFriends] = useState(["steven", "shekhar", "batul"])
  function handleDelete (ind)
  {
    setFriends(friends.filter((v, i) => i != ind))
  }
  return (
		<div className='main bg-white border border-1 border-success container p-5 rounded rounded-5'>
			<div className='row'>
				<p className='col-12 col-md-6 col-lg-4'>
					This is simple todo
				</p>
				<p className='col-12 col-md-6 col-lg-4'>
					You can add your friends
				</p>
				<p className='col-12 col-md-6 col-lg-4'>You can remove your friends</p>
			</div>
			<div className='d-flex gap-3'>
				<input
					type='text'
					className=' form-control'
					placeholder='Enter name'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button
					className=' btn btn-primary'
					onClick={() => setFriends([...friends, value])}>
					Add
				</button>
			</div>
			<div className='container d-flex flex-column gap-2'>
				{friends.map((v, i) => (
					<Friend
						v={v}
						onDelete={handleDelete}
						i={i}
					/>
				))}
			</div>
		</div>
	)
}
export default App;