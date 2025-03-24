export const FirstCard = () => {
    return (
      <>
        <div className="bg-white flex flex-col gap-4 w-full max-w-lg mx-auto p-4 rounded-2xl shadow-md">
          {/* Top Section */}
          <div className="flex justify-between items-center flex-wrap gap-2">
            <p className="text-black text-lg sm:text-xl font-bold">Current balance</p>
            <div className="rounded-2xl bg-slate-900 py-2 px-3 font-serif text-white flex items-center gap-1 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              <p className="text-white text-sm sm:text-md">$125</p>
            </div>
          </div>
  
          {/* Balance Section */}
          <p className="text-black text-2xl sm:text-4xl font-bold font-serif break-words">
            $15,987.00
          </p>
  
          {/* Card Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Card 1 */}
            <div className="bg-black rounded-2xl flex h-28 justify-between flex-col p-4 w-full sm:w-1/2 min-w-0">
              <div className="flex justify-end relative">
                <div className="rounded-full bg-orange-500 w-5 h-5 sm:w-6 sm:h-6"></div>
                <div className="rounded-full bg-yellow-500 w-5 h-5 sm:w-6 sm:h-6 absolute -top-1 -right-4"></div>
              </div>
              <div className="text-lg sm:text-2xl font-bold text-white break-words">
                03948
              </div>
            </div>
  
            {/* Card 2 */}
            <div className="bg-yellow-400 rounded-2xl flex h-28 justify-between flex-col p-4 w-full sm:w-1/2 min-w-0">
              <div className="flex font-bold justify-end text-blue-600">Visa</div>
              <div className="text-lg sm:text-2xl font-bold text-white break-words">
                02548
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  