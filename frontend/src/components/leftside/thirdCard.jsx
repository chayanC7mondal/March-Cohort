export const ThirdCard = () => {
    return (
      <>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl bg-white flex flex-col justify-between h-40 sm:h-44 md:h-48 p-3 sm:p-5 md:p-6 shadow-lg">
          {/* Header Text */}
          <p className="text-sm sm:text-md md:text-lg font-serif">Brokerage account</p>
  
          {/* Amount Section */}
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif break-words">
            $0.00
          </p>
  
          {/* Open Now Button */}
          <a
            href="/open"
            className="bg-yellow-400 text-xs sm:text-sm md:text-base font-bold rounded-3xl text-center py-2 sm:py-3 md:py-4 w-full sm:w-3/4 md:w-1/2 mx-auto transition-transform hover:scale-105"
          >
            Open now
          </a>
        </div>
      </>
    );
  };
  