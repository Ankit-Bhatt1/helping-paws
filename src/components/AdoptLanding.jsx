import React from 'react'

export const AdoptLanding = () => {
  return (
    <div className='montserrat-my  flex '>
        .
        <div className='w-[300px] h-[500px]   bebas-neue-regular text-[100px] ml-[100px]'>
            <span className='block'>ADOPT</span>
            <span className='block'>NOT</span> 
            <span className='block'>SHOP</span>  
        </div>
        <div className='flex  w-[900px] h-[500px]  flex-1 justify-between '>
            <div className='bg-black w-[500px] h-[500px]'>
                <div>
                    <img src='/landing-image.jpg' className= 'w-[500px] h-[500px]  object-cover  '></img>
                </div>
            </div>
        <div className=' flex bg-orange-500 w-[500px] h-[500px] shadow-xl shadow-orange-300'>
        <div className='text-white mt-5 p-5'>
                    <span className='block m-2 text-5xl'>Help us help them.</span>
                    <span className='block m-2 text-2xl mt-5'>Every day, we come across countless animals in need of rescuing, nourishment, medical aid, shelter and rehabilitation.</span>
                    <span className='block m-2 text-lg  mt-5 '>This is your chance to save a life.</span>
                </div>
            <button className='ml-[190px] bg-white absolute mt-[400px] text-2xl p-5  hover:bg-black hover:text-white hover:shadow-xl hover:shadow-black '>DONATE</button>
        </div>
    
           
        </div>
    </div>
  )
}
