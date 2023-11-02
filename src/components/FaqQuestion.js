import React from 'react'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Collapse } from "react-collapse";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FaqQuestion = ({ open, toggle, title, desc }) => {
    return (
        <div className='items-center'>
            <div className="shadow rounded border  border-t-0 bg-white ">
                <div className="p-4 text-xl relative font-medium">
                    <div className="w-full text-2xl font-bold text-[#010767]" onClick={toggle}>
                        {title}
                    </div>
                    <button aria-label='question-expanded' className='text-xl absolute top-0 right-0 p-4 focus:outline-none' onClick={toggle}>
                        {open ? <FontAwesomeIcon icon={faChevronUp} className='w-5 text-[#010767]' /> : <FontAwesomeIcon icon={faChevronDown} className='text-[#010767]' />}
                    </button>
                </div>


                    <Collapse isOpened={open}>
                        <div className='text-[#295FDC] text-xl font-semibold p-5'>
                            {desc}
                        </div>
                    </Collapse>
                
            </div>
        </div>
    )
}

export default FaqQuestion