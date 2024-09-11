import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <h1 className='text-5xl font-semibold text-center text-black'>Log in</h1>
      <p className='font-normal mt-4 text-black'>Welcome back!</p>
        <div className='mt-4 bg-white px-5 py-5 rounded-2xl shadow-2xl border border-bor-color-grey'>
          <div>
            <label className='text-lg font-semibold text-black'>Username or Email Address</label>
            <input
                  className='w-full border-2 rounded-md border-bor-color-grey p-2 mt-1 bg-transparent'
                  placeholder='Enter user name or email address'
            />
          </div>
          <div className='mt-3'>
          <label className='text-lg font-semibold text-black'>Password</label>
            <input
                  className='w-full border-2 rounded-md border-bor-color-grey p-2 mt-1 bg-transparent'
                  placeholder='Enter password'
                  type='password'
            />
          </div>
          <div className='mt-3  flex items-center justify-center'>
            <button className=' font-semibold text-white rounded-md bg-btn-login w-full h-11 '>Log in</button>
          </div>
          <div className='mt-3'>
            <a href='' className='text-forgotten flex items-center justify-center'>Forgotten password</a>
          </div>
        </div>
    </div>
  )
}

export default Login