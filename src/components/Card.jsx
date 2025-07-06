import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"




function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:2.5 }} dragTransition={{bounceDamping:10,bounceStiffness:600}} dragElastic={0.4} className='relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white py-10 px-5 overflow-hidden'>
      <FaRegFileAlt className="text-3xl" />

      <p className='text-sm leading-relaxed mt-5 font-semibold p-5'>{data.desc}</p>

      <div className='footer absolute bottom-0 w-full   left-0  '>
        <div className='flex items-center justify-between px-8 py-3 mb-3'>
          <h5 className='text-sm'>{data.filesize}</h5>
          <span className='w-8 h-8 bg-zinc-500 rounded-full flex items-center justify-center'>
            {data.close? <IoClose/> :  <LuDownload size="1.2em" color='#000' /> }
           
          </span>
         </div>
            
            {data.tagdetails.isOpen && ( <div className={`tag w-full py-4 ${data.tagdetails.tagColor === "blue" ? "bg-blue-600" : " bg-green-600"} flex items-center justify-center`}>
             <h6 className='text-sm font-semibold '> {data.tagdetails.tagTitle}</h6>
        </div>) }
                

       
      </div>
    </motion.div>
  )
}

export default Card;
