import React from 'react'
import { useState,useEffect } from 'react'
function BasicForm() {
    const [formData, setFormData] = useState({
			name: "",
			email: "",
			password: "",
		})
		const [errors, setErrors] = useState({})
		const handleChange = (e) => {
			setFormData({ ...formData, [e.target.name]: e.target.value })
		}
		const handleSubmit = (e) => {
			e.preventDefault()
			let newErrors = {}
			const passwordRegex = /^([A-Z]{1,})([a-z]{1,})([0-9]{1,})$/
			if (formData.name.trim() == "") {
				newErrors.name = "Name is required"
			}
			if (formData.email.trim() == "") {
				newErrors.email = "Email is required"
			}
			if (formData.password.trim() == "") {
				newErrors.password = "password is required"
			}
			if (formData.password.trim().length <= 6) {
				newErrors.minPassword = "Enter minimum 6 password characters"
			}
			if (!passwordRegex.test(formData.password)) {
				newErrors.passwordregex =
					"Enter atleast one uppercase,one lowercase and one digit"
			}
			setErrors(newErrors)
			if (setErrors == {}) {
				fetch()
			}
		}
		return (
			<div className=' min-h-screen bg-amber-200 flex justify-center items-center'>
				<form
					className=' p-5 rounded-3xl bg-white shadow-blue-300 
      flex flex-col gap-4'
					onSubmit={handleSubmit}>
					<input
						type='text'
						name='name'
						value={formData.name}
						onChange={handleChange}
						placeholder='Enter name'
						className=' h-20 w-100 border  border-black rounded-2xl focus:border-blue-300'
					/>
					<p className=' text-red-500'> {errors.name}</p>
					<input
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						placeholder='Enter email'
						className=' h-20 w-100 border border-black rounded-2xl focus:border-blue-300'
					/>
					<p className=' text-red-500'>{errors.email}</p>
					<input
						type='password'
						name='password'
						value={formData.password}
						placeholder='Enter password'
						onChange={handleChange}
						className=' h-20 w-100 border  border-black rounded-2xl focus:border-blue-300'
					/>
					<p className=' text-red-500'>{errors.password}</p>
					<p className=' text-red-500'>{errors.minPassword}</p>
					<p className=' text-red-500'> {errors.passwordregex}</p>
					<button className=' p-3 rounded-2xl text-2xl bg-black text-white'>
						submit
					</button>
				</form>
			</div>
		)
}

export default BasicForm
