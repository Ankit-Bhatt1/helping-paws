import React from 'react'

const Header = () => {
  return (
    <>
    <nav className=' p-1 montserrat-my shadow-lg shadow-slate-300 mt-4'>
        <div className='flex justify-between ml-3 m-3 sm:flex md:justify-between sm:m-3 md:m-3 sm:px-2 md:px-5'>
            
                <div className='  w-full max-w-4xl min-w-[300px] mx-auto cursor-pointer '><span>Helping Paws</span><img src='/paw.png' className='ml-5 w-[40px] sm:w-[50px] lg:w-[50px] max-w-full cursor-pointer '></img></div>
            
                    <div className='flex flex-nowrap ml-auto'>
                    <button className=' ml-auto gap-10 lg:hidden md:hidden  ' >OPTIONS</button>
                    </div>
                        <div className=' mr-10 sm:ml-5 sm:mt-4 '>
                            <ul className='hidden md:flex lg:flex sm:gap-10 sm:ml-2 lg:gap-[100px] md:whitespace-nowrap sm:whitespace-nowrap text-lg ' >
                                <li>Adopt</li>
                                <li>Donate</li>
                                <li>Resources & Guide</li>
                                <li>Stories</li>
                                <li><button>SignIn</button></li>
                            </ul>
                        </div>
                
        </div>
    </nav>
    </>
  )
}

export default Header