import { useState,useEffect } from 'react'
function useAPILogic(url) {
    const [data, setData] = useState([])
    const [errors,setErrors] =useState('')
    useEffect(
       async () =>
        {
            try
            {
                const res = await fetch(url);
		const data=	await res.json()
		setData(data)
           }
            catch (err)
            {
                setErrors(err)
            }			
       },[url])

    return {data,errors}
}

export default useAPILogic