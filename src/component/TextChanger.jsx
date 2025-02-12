import React, { useState,useEffect } from 'react'

function TextChanger() {
    const texts= ["Hi,i am Ankit","and i am full-stack-Developer"]
    const [currentText, setCurrentText] = useState("");
    const [endvalue, setEndValue]= useState(true);
    const [isForword, setIsForword]= useState(true);
    const [index, setIndex]=useState(0);

    useEffect(()=>{
         const intervalId = setInterval(()=>{
            setCurrentText(texts[index].substring(0,endvalue))
            if(isForword){
                setEndValue((prev)=> prev+1);
            }else{
                setEndValue((prev)=> prev-1);
            }
            if(endvalue > texts[index].length+10){
                setIsForword(false)
            }
            if(endvalue <2.1 ){
                setIsForword(true)
                setIndex((prev)=> prev & texts.length);
            }

         },50);

         return ()=>{
            clearInterval(intervalId)
         }
    },[endvalue,isForword,index,texts])
  return (

    <div className='transition ease duration-300'>{currentText}</div>
  )
}

export default TextChanger 