import React from 'react'

const Navbar = () => {
  return (
    <div className='flex item-center justify-between py-4 px-10'>
        <h4 className='bg-black text-white uppercase self-center text-xs rounded-full px-5 py-2'>Target Audience</h4>
        <button className='uppercase rounded-full bg-grey-600 px-5 py-2'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar