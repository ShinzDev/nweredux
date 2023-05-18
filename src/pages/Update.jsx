import React, { useState } from 'react'

const Update = () => {

  const [updateName ,setUpdateName] = useState('')
  const [updateEmail ,setUpdateEmail] = useState('')

  const handleUpdate = (e) => {
    e.preventDefault()
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='shadow p-5 w-50 body-primary'>

      <form action="" onSubmit={handleUpdate} className='body-primary'>

   
      <h3 className='text-center'>Update user</h3>
      <div >
        <label htmlFor="">Name</label>
        <input type="text" className="formcontrol w-100" placeholder='enter your name'  onChange={(e) => setUpdateName(e.target.value)} value={updateName}/>
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" className="formcontrol w-100" placeholder='enter your email' onChange={(e) => setUpdateEmail(e.target.value)}  value={updateEmail}/>
      </div>
        <button className='btn w-100 btn-success'>submit</button>
      </form>
      </div>
    </div>
  )
}

export default Update
