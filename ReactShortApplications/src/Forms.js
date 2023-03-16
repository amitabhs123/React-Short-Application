import React, { useState } from 'react';
import Button from '@mui/material/Button';

export default function Forms () {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('FormData'))
     || {role: {admin: false, security: false}})
    
    // useLayoutEffect(() => {
    //     console.log('inside Layout')
    // }, [])

    // useEffect(() => {
    //     console.log('inside effect')
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('FormData', JSON.stringify(data))
    // }, [data])

    // useEffect(() => {
    //     const pageData = JSON.parse(localStorage.getItem('FormData'))
    //     console.log('pageData', pageData)
    // }, [])
    console.log('dataList', data)

    const handleSubmit = () => {
       // Browser storage accept only in string format not in object/array
       // localStorage.setItem(key, value)
       localStorage.setItem('FormData', JSON.stringify(data))
    }
    return (
        <React.Fragment>
            <h1 style={{ textAlign: 'center'}}>Signup Form</h1>
        <form>
            


            <label>Name:  </label>
            <input placeholder='Enter your name' type='text' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}></input>
            <br />


            <label>Phone Number:  </label>
            <input type='number' value={data.number} onChange={(e) => {setData({ ...data, number: e.target.value})}}></input>
            <br />


            <label>Email ID:  </label>
            <input placeholder='Enter email id' type='email' value={data.emailid} onChange={(e) => setData({...data, emailid: e.target.value})}></input>
            <br />

            {/* For radio/checkbox button common selection we should use name attribute with comman name */}
            <label>Gender:  </label>
            <input type='radio' value={data.gender} name='gender' onChange={() => setData({...data, gender: 'Male'})}></input>
            <label>Male</label>
            <span></span>
            <input type='radio' value={data.gender} name='gender' onChange={() => setData({...data, gender: 'Female'})}></input>
            <label>Female</label>
            <br />


            <label>DOB:  </label>
            <input type='date' value={data.date} onChange={(e) => setData({...data, date: e.target.value})}></input>
            <br />


            <label>What role you want:  </label>
            <input type='checkbox' value={data.role.admin} onChange={(e) => setData({...data, role: {...data.role, admin: e.target.checked}})}></input>
            <label>Admin</label>
            <span></span>
            <input type='checkbox' value={data.role.security} onChange={(e) => setData({...data, role: {...data.role, security: e.target.checked}})}></input>
            <label>Security</label>

            <br />
            <br />

            <Button variant="contained" color="success" onClick={() => handleSubmit()}>Signup</Button>

        </form>

        <br />
        {/* we didn't print full data in jsx bcz of they are in obj with key so we should use an array */}
        {JSON.stringify(data)}
        </React.Fragment>
    )
}