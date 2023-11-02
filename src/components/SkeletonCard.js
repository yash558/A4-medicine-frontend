import React from 'react'
import  Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = () => {
    return (
        <div>
            <div className="flex flex-col rounded-lg shadow-xl w-[100%]  p-4 justify-center items-center text-center" >
                <Skeleton height={300} width={300} className='p-8' />
                <div className="p-2">
                    <h5 className=""><Skeleton height={30} width={180} /></h5>
                    {/* <p className="card-title mb-0">{currElem.description}</p> */}
                </div>
                <Link to="" className=""><Skeleton height={40} width={180} /></Link>
            </div>
        </div>
    )
}

export default SkeletonCard