import Child from "./components/Child"
import { useState } from "react";
function App ()
{
const [c,setC]= useState(0)
  function incr (a)
  {
    console.log("parent got called")
    setC((c)=>c+a)
    console.log(c)
  }
  return (
    <div>
      <Child title="raj" count={c} fun={incr} />
      {/* <Child />
      <Child title="john" /> */}
    </div>
  )
}

export default App
