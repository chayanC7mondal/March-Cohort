export const DebitCard = () => {
    return(
        <>
            <div className="">
                <div className="bg-gray-800 flex h-64 flex-col w-[750px] justify-between  p-4 rounded-xl  bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
                    <h1 className="text-white text-3xl max-w-1/2">Debit card under new <br/>terms and conditions</h1>
                    <div className="flex items-center  gap-2 pl-3 rounded-lg bg-slate-400 h-10 w-44">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                               </svg>
                         <p className="text-white"> Fast calculation</p>


                    </div>
                    <div className="flex items-center pl-3 gap-2 rounded-lg bg-slate-400 h-10 w-44">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                         <p className="text-white"> Payments in 1 day</p>


                    </div>
                    <div className="flex justify-between">
                    <div className="flex items-center pl-3 gap-2 rounded-lg bg-slate-400 h-10 w-44">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                     </svg>

                         <p className="text-white"> 24-hour support</p>


                    </div>
                    <a href="/debit" className="text-white bg-black rounded-lg font-bold py-3 px-5 text-center ">See more</a>
                    </div>
                </div>
              
            </div>
        </>
    )
}
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 9l-3 3-3-3m6 6 3-3 3 3" />
</svg> */}