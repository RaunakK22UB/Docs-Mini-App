import React from 'react'
import Card from './Card';
import {useState, useRef} from 'react';

function Foreground() {
    const ref = useRef(null)
   const data = [
    {desc : "Today is sunday and i am lerning the react and implmenting it as well",
     filesize : ".9mb",
     close:true,
     tagdetails: {
        isOpen: true,
        tagTitle:"Download Naow!!",
        tagColor:"green"
     },
    },
    {desc : "Today is sunday and i am lerning the react and implmenting it as well",
     filesize : ".9mb",
     close:true,
     tagdetails: {
        isOpen: true,
        tagTitle:"Download Naow!!",
        tagColor:"green"
     },
    },
    {desc : "Today is sunday and i am lerning the react and implmenting it as well",
     filesize : ".9mb",
     close:true,
     tagdetails: {
        isOpen: true,
        tagTitle:"Download Naow!!",
        tagColor:"blue"
     },
    }
   ]
    return (
        <>
            <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-6'>  {/* this div actully above the background component it all depends on z value */}

                {/* <Card /> */}

                {data.map((item,index)=>(
                       <Card data={item} reference={ref}/>
                ))}


            </div>
        </>

    )
}

export default Foreground