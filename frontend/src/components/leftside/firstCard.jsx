export const FirstCard = () => {
    return(
        <>
        <div className="bg-white flex flex-col gap-3 w-full p-3 rounded-2xl">
            <div className="flex justify-between items-center">
                <p className="text-black text-md font-bold">Current balance</p>
                <div className="rounded-2xl bg-slate-900 py-2 px-3 font-serif text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 inline-block mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>

                    $125</div>
            </div>
            <p className="text-black text-3xl font-bold font-serif">$15,987.00</p>
            {/*<DebitCard/> */}
            <div className="flex flex-row  gap-2">
            <div className="bg-black rounded-2xl flex h-28 justify-between flex-col p-3 w-full">
                <div className="flex justify-end relative" >
                    <div className="rounded-full bg-orange-500 size-6">
                    </div>
                    <div className="rounded-full bg-yellow-500 size-6 mr-4 absolute">

                    </div>

                </div>
                <div className="text-3xl font-bold text-white">
                    03948
                </div>


            </div>
            <div className="bg-yellow-400 rounded-2xl h-28 flex  justify-between flex-col p-3 w-full">
                <div className="flex font-bold justify-end text-blue-600" >
                    Visa

                </div>
                <div className="text-3xl font-bold text-white">
                    02548
                </div>


            </div>
            </div>
        </div>
        </>
    )
}
