import React from 'react'
import Caption from './Caption'
import Mainright from './Mainright'

const Mainleft = () => {
  return (
    <div className='m-5 p-5 h-9/10 w-2/10 text-black flex flex-col justify-between bg-red-600'>
        <div>
            <h2 className='text-[30px] font-bold'>Prospective <br />customer <br />segmentation</h2>
            <p className="mt-4">
                Depending on customer satisfaction and acess to banking products,
                potential target audience can be divided into three groups
            </p>
        </div>
        <Caption />
    </div>
  )
}

export default Mainleft