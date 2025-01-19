import React from 'react'
import ResumeImg from '../../assets/ResumeImg.jpg'
import {jsPDF} from 'jspdf'
import { GoDownload } from "react-icons/go";

function Resume() {

  function handleDownload(){

    const doc = new jsPDF();

    const img = new Image();
    img.src = ResumeImg;

    img.onload = () => {
      doc.addImage(img,'JPG',0,0,210,297);
      doc.save("resume.pdf");
    }
  }

  return (
    <div className='flex flex-col items-center justify-center mt-20'>
    <button 
      onClick={handleDownload} 
      className='flex flex-row items-center justify-center border border-purple-600 hover:bg-purple-600 shadow-purple-400 rounded-md text-purple-400 hover:text-white hover:border-purple-600 shadow-sm p-2 px-10 mt-5 '
      ><GoDownload />Download as PDF</button>
      <div className='mx-20 m-5 md:mx-36'>
          <img src={ResumeImg} alt='resume' />
      </div>
      
    </div>
  )
}

export default Resume