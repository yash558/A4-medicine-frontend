import React from 'react'

const Button = (props) => {
    return (
        <div className='text-[--main-color] w-[120px] text-xl  flex items-center justify-center bg-white text-center font-[Poppins] px-5 cursor-pointer py-2 mt-1  rounded md:ml-2 hover:bg-[#7d7d7d]' onClick={onclick}>
            {props.children}
        </div>
    )
}

export default Button