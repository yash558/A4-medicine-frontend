import React from 'react'
import featurebg from '../assets/featurebg.jpg'
import { faChartSimple, faBook, faArrowRight, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import scrollToTop from './scrollToTop';
const JoinFeature = () => {
  return (
    <div className='w-full h-full '>
      <div className='w-full h-[700px] bg-scroll bg-gray-900/90 absolute'>
        <img src={featurebg} alt="" className='w-full h-full object-cover mix-blend-overlay' />
      </div>
      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='pt-8 text-xl sm:text-2xl uppercase text-slate-300 text-center'>choose the right option to join A4medicine</h2>
          <h3 className='text-3xl sm:text-5xl font-bold py-6 text-center'>WHY YOU SHOULD JOIN A4MEDICINE</h3>
          <p className='py-4 text-[1rem] text-center  text-slate-300 '>With a subscription to A4Medicine, clinicians gain access to a vast library of charts, books, webinars, and AKT MCQs (Multiple Choice Questions) that cover essential topics in primary care. These resources are meticulously crafted to provide valuable insights, evidence-based knowledge, and practical guidance.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black '>
          <div className='bg-white h-full rounded-xl shadow-2xl'>
            <div className='p-8'>
              <FontAwesomeIcon icon={faBook} className='bg-[--main-color] flex text-3xl w-8 p-6 text-white rounded-lg  mt-[-4rem]' />
              <h3 className='font-bold text-3xl my-6'>GuideBook</h3>
              <p className='text-gray-600 text-[1rem] font-semibold'>The popular Visual Guidebook of Basic and Essential General Practice covers over 200 common topics in primary care using flowcharts from the website A4Medicine Visual Guidebook of Basic and Essential General Practice’ covers up two hundred plus common topics in primary care using A4 Charts.</p>
           <Link to="/visual-guidebook" onClick={scrollToTop}><button className='bg-[--main-color]  h-14 w-36 text-center mt-5 text-white text-xl'>Read More <FontAwesomeIcon icon={faArrowRight} /> </button></Link> 
            </div>


          </div>
          <div className='bg-white h-full rounded-xl shadow-2xl'>
            <div className='p-8'>
              <FontAwesomeIcon icon={faVideo} className='bg-[--main-color] flex text-3xl w-8 p-6 text-white rounded-lg  mt-[-4rem]' />
              <h3 className='font-bold text-3xl my-6'>Webinar</h3>
              <p className='text-gray-600 text-[1rem] font-semibold'>A4Medicine offers medical educational webinars, conducted by domain specialists and specifically designed for primary care, utilizing the Zoho Webinar platform. These webinars offer impartial, balanced guidance from experts, completely free from pharmaceutical influence.</p>
              <Link to="/webinar" onClick={scrollToTop}><button className='bg-[--main-color]  h-14 w-36 text-center mt-5 text-white text-xl'>Read More <FontAwesomeIcon icon={faArrowRight} /> </button></Link>
            </div>
          </div>



          <div className='bg-white h-full rounded-xl shadow-2xl'>
            <div className='p-8'>
              <FontAwesomeIcon icon={faChartSimple} className='bg-[--main-color] flex text-3xl w-8 p-6 text-white rounded-lg  mt-[-4rem]' />
              <h3 className='font-bold text-3xl my-6'>Charts</h3>
              <p className='text-gray-600 text-[1rem] font-semibold'>We provide over 650 medical charts which Covering 650 plus medical topics in form of A4 Charts.
                Adding New Charts Regularly
                Source/References Information also provided
                Cover one topic in each chart
                Decluttered and simplified
                Concise, comprehensive and to the point
                Up to date and evidence-based
              </p>
              <Link to="/medical" onClick={scrollToTop}><button className='bg-[--main-color]  h-14 w-36 text-center mt-5 text-white text-xl'>Read More <FontAwesomeIcon icon={faArrowRight} /> </button></Link>
            </div>

          </div>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default JoinFeature