import React, { useEffect, useState } from 'react'

function TypingAnimation({words,typingSpeed=100,delayBetweenWords=2000}) {
    const [currentWord,setcurrentWord] = useState(0);
    const [displayText,setdisplayText] = useState('');
    const [isDeleting,setisDeleting] = useState(false);

    useEffect(() => {
        let timeout;
        const currentword = words[currentWord];

        if(isDeleting){
            timeout = setTimeout(() => {
                setdisplayText((prev) => prev.slice(0,-1));
                if(displayText === ''){
                    setisDeleting(false);
                    setcurrentWord((prev) => (prev + 1)%words.length);
                }
            }, typingSpeed/2 );
        }
        else{
            timeout = setTimeout(() => {
                setdisplayText((prev) => currentword.slice(0, prev.length + 1));
                if (displayText === currentword) {
                  setTimeout(() => setisDeleting(true), delayBetweenWords);
                }
              }, typingSpeed);
        }
        return () => clearTimeout(timeout);

    },[displayText,isDeleting,words,currentWord,typingSpeed,delayBetweenWords]);

  return (
    <div className="text-center">
      <h1 className="text-2xl sm:text-4xl font-bold text-purple-400">
        {displayText}
        <span className="text-primary border-r-2 animate-pulse ml-1">
          |
        </span>
      </h1>
    </div>

  )
}

export default TypingAnimation