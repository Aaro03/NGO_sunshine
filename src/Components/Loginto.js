import React, { useState } from 'react'

const Loginto = () => {
  const [isLogin, setLogin] = useState();

  return (
    <div>
      <div className='w-full h-full'>
        <img className='absolute w-[100vw] h-[100vh]' 
        src='https://www.shutterstock.com/image-photo/black-white-image-children-walking-600nw-737997076.jpg'
        alt='login_banner'/>
      </div>
      <form className='flex flex-col absolute justify-center left-0 right-0 mx-auto my-36 w-3/12'>
        {/* <div className=''> */}
          <h1 className='text-5xl font-bold text-orange-400'>{isLogin ? 'Login' : 'SignUp'}</h1>
          {!isLogin && (
            <input placeholder='Full Name' className='mt-5 pt-2 pb-2 pl-2'/>
          )}
          <input placeholder='Email' type='email' className='mt-5 pt-2 pb-2 pl-2'/>
          <input placeholder='Password' type='password' className='mt-5 pt-2 pb-2 pl-2'/>
          <h1 className='text-white pt-2 font-bold cursor-pointer'>{isLogin ? "New to SUNSHINE RESCUE?" : "Already have an account?"}</h1>
        {/* </div> */}
      </form>
    </div>
  )
}

export default Loginto
