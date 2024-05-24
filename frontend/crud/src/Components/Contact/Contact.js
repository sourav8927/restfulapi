import React, { useState } from 'react';
import axios from 'axios';
function Contact() {
  const [firstName,setFname]=useState()
  const [lastName,setLname]=useState()
  const [email,setEmail]=useState()
  const [phone,setPhone]=useState()

  const Submit=(e)=>
    {
      e.preventDefault();
      axios.post(`http://localhost:4000/employees/addEmployee`,{firstName,lastName,email,phone})
      .then(result=>console.log(result))
      .catch(err=>console.log(err))
  }
  return (
<>
<div className="container mx-auto p-6 max-w-md">
<form  onSubmit={Submit}  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
<input type='text' placeholder='Enter First Name' id='firstName' onChange={(e)=>setFname(e.target.value)} className='form-control  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'></input>
<br></br>
<label>Last Name</label>
<input type='text' placeholder='Enter Last Name' id='lastName' onChange={(e)=>setLname(e.target.value)} className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'></input>
<br></br>
<label>Email</label>
<input type='email' placeholder='Enter Email' id='email' onChange={(e)=>setEmail(e.target.value)} className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'></input>
<br></br>

<label>Phone</label>
<input type='number' placeholder='Enter Phone' id='phone' onChange={(e)=>setPhone(e.target.value)} className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'></input>
<br></br>
<button type='submit' value='Register' className='btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Register Employee</button>
</form>
</div>
</>
  )
}

export default Contact;