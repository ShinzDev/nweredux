import React, { useState } from 'react'

const Create = () => {
const [name , setName] = useState('')
const [email, setEmail] = useState('')

  const handlesubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='shadow p-5 w-50 body-primary'>

      <form action="" onSubmit={handlesubmit} className='body-primary'>

   
      <h3 className='text-center'>Add new user</h3>
      <div >
        <label htmlFor="">Name</label>
        <input type="text" className="formcontrol w-100" placeholder='enter your name'  onChange={e => setName(e.target.value)} value={name}/>
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" className="formcontrol w-100" placeholder='enter your email' onChange={e => setEmail(e.target.value)}  value={email}/>
      </div>
        <button className='btn w-100 btn-success'>submit</button>
      </form>
      </div>
    </div>
  )
}

export default Create
