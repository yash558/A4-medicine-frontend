import React, {useState} from 'react'
import { indexCancerMedicine } from '../assets'
import PopChart from './../components/PopChart';
const BookIndex2 = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(true);
      };
      const handleOnClose = () => {
        setIsOpen(false);
      };
  return (
    <div className='my-20'>
        <div className="flex justify-center flex-col items-center">
              <img
                src={indexCancerMedicine}
                alt=""
                className="h-[40rem] items-center"
                loading="lazy"
              />
              <button
                className="absolute items-center mt-0 pt-0 left-1/2 -translate-x-1/2 -translate-y-1/2   text-center h-10 w-[20%] text-white hover:bg-[#F17732] text-xl  bg-[--main-color] "
                onClick={handleClick}
              >
                Check Index
              </button>

              {isOpen && (
                <PopChart
                  onClose={handleOnClose}
                  visible={isOpen}
                  image={indexCancerMedicine}
                  name=""
                />
              )}
            </div>
    </div>
  )
}

export default BookIndex2