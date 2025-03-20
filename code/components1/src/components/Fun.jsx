import { useState } from "react"
function Fun ()
{
    const [count,setCount]= useState(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>click me</button>
				<h1>I'm a Function Component</h1>
			</div>
		)
}
export default Fun