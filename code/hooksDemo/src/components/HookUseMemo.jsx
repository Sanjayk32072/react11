import React, { useMemo } from 'react'

function HookUseMemo ()
{
	function fact(n) {
			console.log("function called")
			for (var k = 1, i = 1; i <= n; i++) {
				k = k * i
			}
			console.log(k)
			return k
		}
    const x=useMemo(()=>fact(5),[])
  return (
    <div>
       <button onClick={()=>fact(5)}>5</button>
    </div>
  )
}

export default HookUseMemo
