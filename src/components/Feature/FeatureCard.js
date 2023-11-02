import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { feature } from '../../constants';

const FeatureCard = () => {
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
        <Carousel
           
            gap={20}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={4000}
            autoPlay={true}
            keyBoardControl={false}
            transitionDuration={500}
            arrows={false}
        >
            {feature.map((index, id) => (
                <div className="p-6 border-2 border-[#010767] bg-white shadow-2xl h-[100%] mx-4 md:mx-12  flex-col flex justify-center items-center rounded-lg text-center overflow-hidden cursor-pointer card px-4" key={id}>
                    <div className="text-xl">
                        <img src={index.img} alt="" loading='lazy' className='h-[100px] w-[100px]' />
                    </div>
                    <h3 className='text-[1.3rem]  m-1  text-black font-[700] capitalize'>{index.title}</h3>
                    <p className='text-[1rem]  text-[#010767] mb-0 font-[500] '>{index.description}</p>
                </div>
            ))}
        </Carousel >


    )
}

export default FeatureCard