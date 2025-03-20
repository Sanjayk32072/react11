import './App.css'
import { useState } from 'react'
function App ()
{
  const [value, setValue] = useState('');
  const [groceries,setGroceries] = useState([])
  function addMyData (e)
  {
    console.log(e.target.value)
    setValue(e.target.value)
  }
  function handleClick ()
  {
    setGroceries([...groceries, value])
    setValue('')
    // groceries.push(value);
    // setGroceries(groceries)
  }
  return (
    <div>
      <h1>Grocery List</h1>
      <input type="text" placeholder="Enter a name" value={value} onChange={addMyData}/>
      <button onClick={handleClick}>Add</button>
      <div className="groceries">
        {
          groceries.map((v) => (
            <div>
              <span>{v}</span>
              <button>❎</button>
            </div>
           ))  
        }
      </div>
    </div>
  )
}

export default App
