import React from 'react'
import { useSelector } from 'react-redux'

function Header ()
{
    const count = useSelector((state) => state.myReducer.count)
    const isLogin = useSelector((state)=>state.loginReducer.isLogin)
  return (
    <div style={{backgroundColor:'black',color:'white',fontSize:'48px'}}>
          <p>count:{count}</p>
         { isLogin && <p>Hi Prasad</p>}
    </div>
  )
}

export default Header
