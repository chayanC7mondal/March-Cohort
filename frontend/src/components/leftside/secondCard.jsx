export const SecondCard = () => {
    return (
      <>
        <div className="flex flex-col gap-4 bg-white rounded-2xl p-4 w-full max-w-lg mx-auto shadow-md">
          {/* Header Section */}
          <p className="font-serif text-base sm:text-lg md:text-xl font-bold">Real estate loan</p>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-red-500 break-words">
            -$113,920.00
          </p>
          <p className="text-xs sm:text-sm md:text-base font-serif text-gray-500">20 payments left</p>
  
          {/* Upcoming Payments Section */}
          <div className="flex flex-col gap-4">
            {/* Payment 1 */}
            <div className="flex justify-between items-center gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-yellow-400 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-black text-xs sm:text-sm md:text-base">
                  6
                </div>
                <div className="flex flex-col">
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 font-serif">28 January</p>
                  <p className="text-xs sm:text-sm md:text-base font-serif">$5,696.00</p>
                </div>
              </div>
              <a
                href="/pay"
                className="text-xs sm:text-sm md:text-base text-white bg-slate-900 py-2 px-3 sm:px-5 sm:py-2 rounded-3xl text-center w-auto min-w-[80px] sm:min-w-[100px] md:min-w-[120px] hover:bg-gray-700 transition duration-300"
              >
                Pay now
              </a>
            </div>
  
            {/* Payment 2 */}
            <div className="flex justify-between items-center gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gray-100 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-black text-xs sm:text-sm md:text-base">
                  7
                </div>
                <div className="flex flex-col">
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 font-serif">28 February</p>
                  <p className="text-xs sm:text-sm md:text-base font-serif">$4,596.00</p>
                </div>
              </div>
            </div>
  
            {/* Payment 3 */}
            <div className="flex justify-between items-center gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gray-100 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-black text-xs sm:text-sm md:text-base">
                  8
                </div>
                <div className="flex flex-col">
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 font-serif">28 March</p>
                  <p className="text-xs sm:text-sm md:text-base font-serif">$1,356.00</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* See More Button */}
          <a
            href="/see-more"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 text-xs sm:text-sm md:text-base text-center rounded-3xl w-full md:w-auto mx-auto md:mx-0 mt-4 hover:bg-yellow-500 transition duration-300"
          >
            See more
          </a>
        </div>
      </>
    );
  };
  