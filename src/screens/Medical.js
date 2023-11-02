import React from 'react'
import Charts from '../components/Charts'
import FaqOne from '../components/FaqOne'

import ChartIndex from './../components/ChartIndex';

const Medical = () => {
  return (
    <div className='mt-14'>      
      <ChartIndex />
      <Charts/>
      <FaqOne/>
    </div>
  )
}

export default Medical