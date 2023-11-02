import React from 'react'
import { testimonials } from '../constants'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Client = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 764 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 764, min: 0 },
            items: 1
        }
    };
    return (
        <div className='py-24 bg-white'>
            <div className="container max-w-6xl w-[100%] m-auto px-4">
                <div className="section-title mb-5 flex justify-center flex-col items-center">
                    <h2 className='flex flex-row text-4xl font-bold'>Our &nbsp; <span> Testimonials</span></h2>
                    <p className='text-xl font-medium'>what client say about us?</p>
                </div>

                <div className="">
                    <Carousel
                        
                        responsive={responsive}
                        infinite={true}
                        autoPlaySpeed={4000}
                        autoPlay={true}
                        keyBoardControl={false}
                        transitionDuration={500}
                        arrows={false}
                    >
                        {testimonials.map((index, id) => (
                            <div className="bg-[#0E2954] flex flex-col justify-between p-10 m-4 h-[90%] rounded-lg" key={id}>
                                <div className='text-4xl text-white mb-2'>
                                    <i className="fa-solid fa-quote-left"></i>
                                </div>
                                <p className='text-xl font-[500] text-white text-justify'>{index.testimonial}</p>
                                <div className="flex justify-between pt-6 relative bottom-0">
                                    <div className="client-pic">
                                        <a href="/">
                                            <img src={index.image} alt="" className='rounded-full h-12 w-12  object-contain   ' />
                                        </a>
                                    </div>
                                    <div className="text-white text-[14px] font-[400]">
                                        <h6>{index.name}</h6>
                                        <span>{index.designation}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Client