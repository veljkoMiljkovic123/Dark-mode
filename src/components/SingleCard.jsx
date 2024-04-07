import React from 'react'

function SingleCard({el}) {
  return (
    <div className='bg-black/50 text-white dark:bg-slate-300 dark:text-black'>
        
      <div className='relative'>
      <img src={el.thumbnail} className='h-[200px] w-[300px] object-cover' />
      
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 hover:bg-transparent transition-all"></div>
      </div>

      <div className='flex flex-col items-center justify-center p-3 w-[300px] text-center' >
      <h2 className='dark:text-orange-500'>{el.title}</h2>
      <p className='font-bold'>${el.price}</p>
      <p>{el.description}</p>
      </div>
    </div>
  )
}

export default SingleCard