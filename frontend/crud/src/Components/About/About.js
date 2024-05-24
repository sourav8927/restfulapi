import React, { useEffect, useState } from 'react'
import styles from './About.module.css';
import axios from 'axios';
import {Link} from "react-router-dom";
function About() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/employees')
    .then(result=>setUsers(result.data))
    .catch(err=>console.log(err))
  },[]);

  const handleDelete=(id)=>{
    axios.delete('http://localhost:4000/employees/deleteEmployee/'+id)
    .then(res=>{console.log(res)
      window.location.reload()})
      .catch(errr=>console.log(errr))
  }
  return (
    <>
   
        <div className={styles.backimage}>
    <img src={require('../../images/fontimage.jpg')}></img>
    </div>
 <div className='justify-center items-center m-auto p-10 '>
  <div className='max-h-80 overflow-y-auto'>
    <table className="w-[70%] leading-normal shadow-md rounded-lg overflow-hidden min-w-full divide-y divide-gray-200">
    <tr>
    <th className="px-5 py-3 bg-gray-800 text-white text-left text-xs font-semibold uppercase tracking-wider" >First Name</th>
    <th className="px-5 py-3 bg-gray-800 text-white text-left text-xs font-semibold uppercase tracking-wider">Last Name</th>
    <th className="px-5 py-3 bg-gray-800 text-white text-left text-xs font-semibold uppercase tracking-wider">Email</th>
    <th className="px-5 py-3 bg-gray-800 text-white text-left text-xs font-semibold uppercase tracking-wider">Phone</th>
    <th className="px-5 py-3 bg-gray-800 text-white text-left text-xs font-semibold uppercase tracking-wider">Update</th>
    <th className="px-5 py-3 bg-gray-800 text-white text-left text-xs font-semibold uppercase tracking-wider">Delete</th>
    </tr>

    <tbody>
    {
      users.map((user)=>{
        return <tr className="bg-white border-b">
        <td className="px-5 py-5 text-sm" >{user.firstName}</td>
        <td className="px-5 py-5 text-sm">{user.lastName}</td>
        <td className="px-5 py-5 text-sm">{user.email}</td>
        <td className="px-5 py-5 text-sm">{user.phone}</td>

        <td><Link to={`/update/${user._id}`} className="text-blue-500 hover:text-blue-700">Update</Link>&nbsp;&nbsp;</td>
        <button onClick={(e)=>handleDelete(user._id)} className="text-red-500 hover:text-red-700">Delete</button>
        </tr>
      })
    }
    </tbody>
    </table>
    </div>
    </div>
    </>
  )
}

export default About;