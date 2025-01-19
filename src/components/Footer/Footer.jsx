import React from 'react'

function Footer() {
  return (
    <div className='bg-black border-t border-white sm:p-2 mt-10 flex flex-col sm:flex-row justify-between'>
      <div className='text-white flex justify-center items-center p-3 sm:p-5'>
        <p>Design and Developed by Ashish Soni </p>
      </div>
      <div className='text-white flex flex-col justify-center items-center p-2 sm:p-5'>
          <h2>FIND ME ON </h2>
          <h3>Feel free to <span className='text-purple-400'>connect</span> with me</h3>
          <div className='flex justify-between  items-center mt-2'>
            <i class="fa-brands fa-linkedin mx-2"></i>
            <i class="fa-brands fa-instagram mx-2"></i>
            <i class="fa-solid fa-envelope mx-2"></i>
            <i class="fa-brands fa-github mx-2"></i>
          </div>
      </div>
    </div>
  )
}

export default Footer