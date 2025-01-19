import React from 'react'
import Card from './Card' 
import ttt from '../../assets/ttt.png'

function Projects() {
  return (
    <div className='mt-20'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-purple-400 text-4xl my-3 font-mono '>My Works</h1>
        <h1 className='text-white font-mono'>Projects I'm Currently Working On</h1> 
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center gap-6  mx-6 sm:mx-15'>
      <Card image={<img src={ttt} alt=""  />}
            name="Tic-Tac-toe" 
            description="A dynamic Tic-Tac-Toe game built with React and styled with CSS, featuring interactive gameplay, turn tracking, winning highlights, and a reset option for seamless play."
      />
      <Card image={<img src={ttt} alt=""  />}
            name="Tic-Tac-toe" 
            description="A dynamic Tic-Tac-Toe game built with React and styled with CSS, featuring interactive gameplay, turn tracking, winning highlights, and a reset option for seamless play."
      />
      <Card image={<img src={ttt} alt=""  />}
            name="Tic-Tac-toe" 
            description="A dynamic Tic-Tac-Toe game built with React and styled with CSS, featuring interactive gameplay, turn tracking, winning highlights, and a reset option for seamless play."
      />
      <Card image={<img src={ttt} alt=""  />}
            name="Tic-Tac-toe" 
            description="A dynamic Tic-Tac-Toe game built with React and styled with CSS, featuring interactive gameplay, turn tracking, winning highlights, and a reset option for seamless play."
      />
      <Card image={<img src={ttt} alt=""  />}
            name="Tic-Tac-toe" 
            description="A dynamic Tic-Tac-Toe game built with React and styled with CSS, featuring interactive gameplay, turn tracking, winning highlights, and a reset option for seamless play."
      />
      <Card image={<img src={ttt} alt=""  />}
            name="Tic-Tac-toe" 
            description="A dynamic Tic-Tac-Toe game built with React and styled with CSS, featuring interactive gameplay, turn tracking, winning highlights, and a reset option for seamless play."
      />
      <Card image={<img src={ttt} alt=""  />}
            name="Tic-Tac-toe" 
            description="A dynamic Tic-Tac-Toe game built with React and styled with CSS, featuring interactive gameplay, turn tracking, winning highlights, and a reset option for seamless play."
      />
      </div>
    </div> 
  )
}

export default Projects