import React from 'react'
import { useState } from 'react'
function Controlled ()
{
    const [formData, setFormData] = useState({
        name:'',email:'',password:''
    })
    const handleChange = (e) =>
    {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
    }
    function handleSubmit (e)
    {
       e.preventDefault()
        console.log("name: " + formData.name)
        console.log("email: " + formData.email)
        console.log("password: " + formData.password)
        setFormData({
        name:'',email:'',password:''
    })
    }
  return (
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter the name' value={formData.name}
            name='name'  onChange={handleChange} /> 
          <input type="email" placeholder='Enter email' value={formData.email}
            name='email'  onChange={handleChange} />
          <input type="password" placeholder='Enter the password'
              name='password' value={formData.password}
              onChange={handleChange} />
          <button>submit</button>
    </form>
  )
}

export default Controlled
