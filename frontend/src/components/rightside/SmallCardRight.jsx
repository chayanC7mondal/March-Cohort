export const SmallCardRight = () => {
    return(
        <>
        <div className="bg-white flex  flex-col rounded-xl p-5 gap-3">
            <div className="flex justify-between">
                <p className="text-black font-semibold">Deposit for 8 month</p>
                <p className="text-gray-400"> Nov15 , 2024</p>

            </div>
            <div className="flex justify-between font-serif">
                <p className="text-black text-3xl font-bold">$ 1,318.63</p>
                <p className="text-green-400 font-bold text-3xl">9%</p>
            </div>
            <div className="flex justify-between font-bold">
                <p className="text-gray-600 font-serif">$ 1,318.63</p>
                <p className="text-gray-400">Feb 15 , 29 days later</p>
            </div>

        </div>
        </>
        )
    }
