import React from 'react'
import boy from '../../assets/boy.png'
import TypingAnimation from './TypingAnimation'

function Home() {
  return (
    <div className='mt-20 m-2'>
      <div className='flex justify-between items-center m-0'>
        <div className='flex flex-col text-xl sm:text-2xl ml-10'>
          <h1 className= 'text-white m-0 p-2 '>Hellooo There! <span className="inline-block animate-wave text-3xl sm:text-6xl origin-bottom">👋</span></h1>
          <h1><span className='text-purple-400 text-3xl m-0 p-2' >I'm Ashish Soni</span> </h1>
          <div className='flex flex-row items-center mt-5 '>
            <h2 className=' text-white '>I Am into </h2>
            <TypingAnimation
                words={['Web Development','Machine Learning']}
                typingSpeed={150}
                delayBetweenWords={2000}
            />
          </div>
        </div>
        <div className='flex justify-center items-center mr-5'>
          <img src={boy} alt="boy" className='w-3/5' />
        </div>
      </div>
    </div>
  )
}

export default Home