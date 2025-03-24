export const BigCardRight = () => {
    return (
      <>
        <div className="bg-white flex flex-col rounded-xl p-4 gap-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto shadow-md">
          
          {/* Header */}
          <p className="text-sm sm:text-base md:text-lg font-bold text-black">
            Convert currency
          </p>
          
          {/* Exchange From */}
          <p className="text-xs sm:text-sm text-gray-500 font-sans">
            Exchange from
          </p>
          <div className="flex justify-between items-center">
            <p className="text-base sm:text-lg md:text-xl text-black font-serif font-bold">
              $3,215.00
            </p>
            <div className="bg-gray-200 rounded-3xl p-2 sm:p-3 text-xs sm:text-sm font-bold">
              USD
            </div>
          </div>
  
          {/* To Section */}
          <p className="text-xs sm:text-sm text-gray-400">To</p>
          <div className="flex justify-between items-center">
            <p className="text-base sm:text-lg md:text-xl text-black font-serif font-bold">
              £3,215.00
            </p>
            <div className="bg-gray-200 rounded-3xl p-2 sm:p-3 text-xs sm:text-sm font-bold">
              GBP
            </div>
          </div>
        </div>
      </>
    );
  };
  