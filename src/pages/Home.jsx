import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'




const Home = () => {
  const user = useSelector( (state) => state.user )
  console.log(user)


  return (
    <div className='container'>
      <h2  className='my-5 text-center text-secondary'>Crud app using toolkit</h2>

      <Link to='/create' className='btn btn-success my-3'> create +</Link>

    <table className='table'>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
             {/* <tr>
                <td>001</td>
                <td>Shina</td>
                <td>shin@gma il.com</td>
                <td className='gap-5'>
                    <button className='btn btn-warning'>edit</button>
                   
                    <button  className='btn btn-danger'>delete</button>
                </td>
              </tr> */}
              {
                user.map((user) =>(
                  <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className=' '>
                    <button className='btn btn-warning m-2'>edit</button>
                   
                    <button  className='btn btn-danger'>delete</button>
                </td>
              </tr> 
                ))
              }
            </tbody>
    </table>

    </div>
  )
}

export default Home
