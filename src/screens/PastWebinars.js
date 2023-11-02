import React from 'react'
import HomeComponent from '../components/HomeComponent';
import Webinar from '../components/Webinar';
import { webinarProf } from '../assets';

const PastWebinars = () => {
  return (
    <div className='mt-32'>
        <HomeComponent title="Learn From Experts A4 Webinar Series" subtitle="Our panel of specialists aim to bring expert knowledge and their experience." image={webinarProf} />
        <Webinar/>
    </div>
  )
}

export default PastWebinars