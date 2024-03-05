import React, { useState } from 'react'



function Card({tourData, removeCardMethod}) {

    const id = tourData.id;
    const image = tourData.image;
    const name = tourData.name;
    const price = tourData.price;
    const info = tourData.info;

    let [fullTextDisplayed, setFullTextDisplayed] = useState(false);

    function toggle(){
        setFullTextDisplayed(!(fullTextDisplayed));
    }

    let removeCardHandler = ()=>{
        removeCardMethod(id);
    }

    const visibleInfo = info.substring(0,150)+'....'
   

  return (
        <div className='w-[400px] h-fit border-4 border-white border-dotted rounded-3xl px-2 py-2 my-2 mx-2 shadow-2xl'>
            <img src={image} alt={name} className='aspect-square rounded-3xl border-2 border-white' />
            <div className='text-center text-2xl my-2 font-serif font-bold'>{name}</div>
            <div className='mx-4 my-2 text-balance'>{fullTextDisplayed ? info : visibleInfo } <span className='text-slate-800 cursor-pointer' onClick={toggle}>{fullTextDisplayed ? "Show Less" : "Read More"}</span></div>
            <div className='text-3xl font-bold text-center text-green-300'>₹ {price}</div>
            <button
            onClick={removeCardHandler} 
            className='w-full h-8 rounded-2xl text-white border-white border-2 my-2 hover:bg-white hover:text-red-400'>Not Interested</button>
        </div>
  )
}

export default Card