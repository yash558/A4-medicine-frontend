import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Banner = () => {
    const [visible, setVisible] = useState(true);
    return (
        <div style={{ visibility: visible ? 'visible' : 'hidden' }} className='left-0 right-0 bg-[--main-color] text-white top-0 z-[999] space-x-4 w-full h-[120px] lg:h-[50px] fixed flex justify-center items-center bg-gradient-to-b '>
            <h1 className='text-xl font-semibold'>"Empower Your RCGP AKT Journey: Master the MCQs with Us!"</h1>
            <button className='bg-white text-[#010767] font-bold p-2 '>Try Now!</button>
            <button className=''>
                <FontAwesomeIcon icon={faClose} className='text-2xl' onClick={() => setVisible(!visible)} />
            </button>
        </div>
    )
}

export default Banner