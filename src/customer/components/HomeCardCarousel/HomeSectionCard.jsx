import React from 'react'

const HomeSectionCard = ({props}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-60 mx-3'>

      <div className='h-56  w-54'>
        <img className='object-cover object-top w-full h-full' src={props.imageUrl}/>
      </div>

      <div className='p-1 w-full text-left'>
        <h3 className='text-lg font-medium text-gray-900'>{props.brand}</h3>
        <p className='mt-2 text-gray-500 text-sm'>{props.title}</p>

      </div>
        
    </div>
  )
}

export default HomeSectionCard