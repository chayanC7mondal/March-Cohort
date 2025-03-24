export const BigCardRight = () => {
    return(
        <>
        <div className="bg-white flex  flex-col rounded-xl p-4 gap-2">
            <p className="text-sm font-bold text-black">Convert currency</p>
            <p className="text-sm text-gray-500 font-sans">Extchange from</p>
            <div className="flex justify-between items-center">
                <p className="text-black font-serif font-bold">$3,215.00</p>
                <div className="bg-gray-200 rounded-3xl p-2 font-bold">
                    USD 
                </div>

            </div>
            <p className="text-sm text-gray-400">To</p>
            <div className="flex justify-between items-center">
                <p className="text-black font-serif font-bold">£3,215.00</p>
                <div className="bg-gray-200 rounded-3xl p-2 font-bold">
                   GBP
                </div>

            </div>
        </div>
        </>
        )
}