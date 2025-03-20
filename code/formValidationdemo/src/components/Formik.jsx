import React from "react"
import { Formik } from "formik"
import * as Yup from 'yup'
function FormikComp() {
	return (
		<div className=' min-h-screen bg-amber-200 flex justify-center items-center'>
			<Formik
				initialValues={{ name: "", email: "", password: "" }}
				validationSchema={Yup.object().shape({
					name: Yup.string()
						.min(2, "Too Short!")
						.max(50, "Too Long!")
						.required("Enter the name"),
					password: Yup.string()
						.min(2, "Too Short!")
						.max(50, "Too Long!")
						.required("Password is required"),
					email: Yup.string().email("Invalid email").required("Required"),
				})}
                onSubmit={(val) =>
                {
                    console.log(val)
                    fetch("https://my-spring-app-10b4.onrender.com/form/set", {
                        method: "POST",
                        body: {
                            "name": val.name,
                            "email": val.email,
                            "password":val.password
                        },
                    })
                        .then((res) => console.log(res))
                        .catch((err) => console.log(err))
                }}>
				{(props) => {
					return (
						<>
							<form
								onSubmit={props.handleSubmit}
								className=' p-5 rounded-3xl bg-white shadow-blue-300 
      flex flex-col gap-4'>
								<input
									type='text'
									placeholder='Enter the name'
									name='name'
									value={props.values.name}
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									className=' h-20 w-100 border  border-black rounded-2xl focus:border-blue-300'
								/>
								<p className=' text-red-500'>{props.errors.name}</p>
								<input
									type='email'
									name='email'
									placeholder='Enter the email'
									value={props.values.email}
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									className=' h-20 w-100 border  border-black rounded-2xl focus:border-blue-300'
								/>
								<p className=' text-red-500'>{props.errors.email}</p>
								<input
									type='password'
									name='password'
									placeholder='Enter the password'
									value={props.values.password}
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									className=' h-20 w-100 border  border-black rounded-2xl focus:border-blue-300'
								/>
								<p className=' text-red-500'>{props.errors.password}</p>
								<button
									className=' p-3 rounded-2xl text-2xl bg-black
                                 text-white'>
									submit
								</button>
							</form>
						</>
					)
				}}
			</Formik>
		</div>
	)
}

export default FormikComp
