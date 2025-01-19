import React from 'react'
import about from '../../assets/about.png'
import SkillSet from './SkillSet'

function About() {
  return (
    <div className='mt-20 m-2  text-white text-xl md:text-2xl font-serif'>
      <h2 className='flex justify-center mb-2'>Who<span className='text-purple-400 ml-2'> I'M </span> </h2>
      <div className='p-10 sm:flex items-center'>
        <p>Hi Everyone, I am <span className='text-purple-400'>Ashish Soni</span> from <span className='text-purple-400'>Kolkata,India.</span> <br />
        I am a 3rd-year  Computer Science and Engineering specializing in Artificial Intelligence student at the Institute of Engineering and Management, Kolkata. <br />
        <br />
         
        Apart from coding, some other activities that I love to do! <br />
        <ul className='list-disc ml-10'>
          <li>Reading Books </li>
          <li>Playing Cricket</li>
          <li>Watching Anime</li>
        </ul>
        </p>
        <div className='m-5 sm:ml-4 '>
          <img src={about} alt="about" />
        </div>
      </div>
      <div >
        <h1 className='flex justify-center text-purple-400 text-3xl font-bold my-10'>Current Skillset</h1>
        <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-10 mx-20 md:grid-cols-4 md:gap-15 lg:grid-cols-5 lg:gap-20 '>
          <SkillSet/>
        </div>
      </div>
    </div>
  )
}

export default About