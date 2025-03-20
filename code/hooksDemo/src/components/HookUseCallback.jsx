import React from 'react'

function HookUseCallback ({msg,count})
{
    msg()
  return (
    <div>
      <p>{count}</p>
      <h1>I'm child component</h1>
    </div>
  )
}

export default React.memo(HookUseCallback)
