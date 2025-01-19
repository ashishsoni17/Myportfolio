import React from 'react'


function Card(props) {
  return (
    <div className='text-white border border-purple-400 shadow-purple-400 shadow-md p-3 m-10 min-w-72 min-h-80 max-w-96 max-h-full'>
        <div className='flex justify-center m-5'>
            {props.image}
        </div>
        <div className='flex justify-center m-3 font-bold text-purple-400 text-2xl'>
            {props.name}
        </div>
        <div className='flex justify-center my-5'>
            {props.description}
        </div>
        <div className='flex justify-evenly items-center my-5'>
            <div className='hover:bg-purple-600 shadow-purple-400 rounded-lg text-purple-400 hover:text-white hover:border-purple-600 shadow-sm p-2 '>
            <i class="fa-brands fa-github mx-2"></i><button>Github</button>
            </div>
            <div className='hover:bg-purple-600 shadow-purple-400 rounded-lg text-purple-400 hover:text-white hover:border-purple-600   shadow-sm p-2 '>
                <button>Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Card