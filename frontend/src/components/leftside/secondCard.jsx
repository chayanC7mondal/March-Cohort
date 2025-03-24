export const SecondCard = () => {
    return(

        <>
        <div className="flex flex-col gap-3 bg-white rounded-2xl p-3">
            <p className="font-serif text-md text-xl font-bold" >Real estate loan</p>
            <p className="text-5xl font-bold font-serif">-$113,920.00</p>
            <p className="text-sm font-serif "> 20 payments left</p>
               <div className="flex justify-between">
                  <div  className="flex justify-center items-center gap-3">
                    <div className="rounded-full font-serif bg-yellow-400 text-center size-8 font-bold">
                        6
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-serif text-gray-400">28 January</p>
                        <p className="text-sm font-serif"> $5,696.00</p>

                    </div>

                  </div>
                  <a href="/pay" className="text-white rounded-3xl bg-slate-900 py-2 px-4 text-center">Pay now</a>

               </div>

               <div  className="flex justify-start items-center gap-3">
                    <div className="rounded-full font-serif bg-gray-100 text-center size-8 font-bold">
                        7
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-serif text-gray-400">28 February</p>
                        <p className="text-sm font-serif"> $4,596.00</p>

                    </div>

                  </div>

                  <div  className="flex justify-start items-center gap-3">
                    <div className="rounded-full font-serif bg-gray-100 text-center size-8 font-bold">
                        8
                    </div>

                    <div className="flex flex-col ">
                        <p className="text-sm font-serif text-gray-400">28 March</p>
                        <p className="text-sm font-serif"> $1,356.00</p>

                    </div>

                  </div>

                  <a href="/see more" className="px-6 py-3  bg-yellow-400 mr-10 ml-10 text-center rounded-3xl">See more</a>

        </div>
        </>
    )
}