import React from 'react'
import Section2 from '../Section2/Section2'
import Navbar from './Navbar'
import Mainleft from './Mainleft'
import Mainright from './Mainright'

export const Section1 = () => {
  return (
    <div className='h-screen w-screen'>
        <Navbar />
        <div className='flex'>
          <Mainleft/>
          <Mainright />
        </div>
    </div>
  )
}

export default Section2