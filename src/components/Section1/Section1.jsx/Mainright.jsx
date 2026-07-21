import React from 'react'
import Card from './Card'

const Mainright = () => {
  return (
    <div className='relative  h-[80vh] w-[80vw]'>
      <div className='flex h-full justify-evenly'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Mainright