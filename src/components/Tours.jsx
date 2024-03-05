import Data from './Data';
import Card from './Card';
import { useState } from 'react';

function Tours() { 

    let [sendData, setSendData] = useState(Data)

    if(sendData.length === 0)
       return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <button 
            className = 'text-2xl font-bold border-white border-4 rounded-lg p-4'
            onClick={()=>setSendData(Data)}>REFRESH</button>
        </div>
    )

    function removeCard(removalID){
        sendData = sendData.filter((tour)=>{
            if(tour.id !== removalID)
                return tour;
        })
        setSendData(sendData)
        console.log(sendData);
    }
  
    return (
        
            <div className='flex flex-wrap justify-center my-16'>
                {
                    sendData.map((tour) => {
                        return ( <Card tourData = {tour} removeCardMethod={removeCard}/>)
                    } )
                }
            </div>
    ) 
}

export default Tours



//sendData = 1,2,3,4,5,6
// function takes id - sendData = 1,2,3,5,6