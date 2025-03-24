import apple from '../../assets/logo-apple.png'
import netfix from '../../assets/netflix.png'
import x from '../../assets/twitter (1).png'
import tesla from '../../assets/tesla.png'
export const CardInvest = () => {
    return(
        <>
            <div className="bg-white px-5 py-3 rounded-xl ">
                <div className='flex flex-col gap-7 justify-between items-center'>
                    <div className='flex gap-16 '>
                    <p className="text-black text-lg font-bold">My investments</p>
                    <a href='/all' className='text-black text-lg font-bold'> See all <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline-block">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                   </svg>
                    </a>
                    </div>
                   

                      <div className='flex gap-20 items-center'>  
                    <div className='flex  gap-2 justify-center items-center'>
                                <div className="rounded-full bg-gray-300 p-2  ">
                                    <img src={apple} alt="apple" className="h-6 w-6"/>
                                </div>
                                <p>Apple</p>
                                </div>
                                <p className='text-green-400 font-bold'>+0.33%</p>
                                </div> 


                                <div className='flex  gap-20 items-center'>
                                <div className='flex  gap-2 justify-center items-center'>
                                <div className="rounded-full bg-gray-300 p-2  ">
                                    <img src={netfix} alt="netfix" className="h-6 w-6"/>
                                </div>
                                <p>Neflix</p>
                                </div>
                                <p className='text-red-600 font-bold'>-4.96%</p>
                                </div>


                                <div className='flex  gap-24 items-center'>     
                                <div className='flex   gap-2 justify-center items-center'>
                                <div className="rounded-full bg-gray-300 p-2  ">
                                    <img src={x} alt="X" className="h-6 w-6"/>
                                </div>
                                <p>X</p>
                                </div>
                                <p className='text-green-400 font-bold'>+24.13%</p>

                                </div>


                                <div className='flex  gap-20 items-center'>
                                <div className='flex  gap-2 justify-center items-center'>
                                <div className="rounded-full bg-gray-300 p-2  ">
                                    <img src={tesla} alt="tesla" className="h-6 w-6"/>
                                </div>
                                <p>Tesla</p>
                                </div>
                                <p className='text-red-600 font-bold'>-4.96%</p>
                                </div>



                    
                    </div>

               
            </div>
        </>
    )
}

              
