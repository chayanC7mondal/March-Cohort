export const SmallCardRight = () => {
    return (
      <>
        <div className="bg-white flex flex-col rounded-xl p-4 sm:p-5 gap-3 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto shadow-md">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <p className="text-black text-sm sm:text-base md:text-lg font-semibold">
              Deposit for 8 months
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">Nov 15, 2024</p>
          </div>
  
          {/* Amount & Percentage */}
          <div className="flex justify-between items-center font-serif">
            <p className="text-black text-2xl sm:text-3xl md:text-4xl font-bold">
              $1,318.63
            </p>
            <p className="text-green-400 font-bold text-2xl sm:text-3xl md:text-4xl">
              9%
            </p>
          </div>
  
          {/* Bottom Section */}
          <div className="flex justify-between items-center font-bold">
            <p className="text-gray-600 text-sm sm:text-base font-serif">
              $1,318.63
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Feb 15, 29 days later
            </p>
          </div>
        </div>
      </>
    );
  };
  