import React from 'react'
import {DiReact,DiPython,DiNodejs,DiJava,DiJavascript,DiHtml5,DiCss3} from "react-icons/di"

function SkillSet() {
  return (
    <>
        <div className='flex border border-purple-400 rounded-lg justify-center  p-5 px-8 '>
            <DiJava size={70}/> 
        </div>
        <div className='flex border border-purple-400 rounded-lg justify-center  p-5 px-8'>
            <DiPython size={70} /> 
        </div>
        <div className='flex border border-purple-400 rounded-lg justify-center  p-5 px-8'>
            <DiHtml5 size={70}/>
        </div>
        <div className='flex border border-purple-400 rounded-lg justify-center  p-5 px-8'>
            <DiCss3 size={70}/> 
        </div>
        <div className='flex border border-purple-400 rounded-lg justify-center  p-5 px-8'>
            <DiJavascript size={70}/> 
        </div>
        <div className='flex border border-purple-400 rounded-lg justify-center  p-5 px-8'>
            <DiReact size={70}/> 
        </div>
        <div className='flex border border-purple-400 rounded-lg justify-center  p-5 px-8'>
            <DiNodejs size={70}/> 
        </div>
    </>
    

  )
}

export default SkillSet