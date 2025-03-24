export const DebitCard = () => {
    return (
      <>
        <div className="w-full px-4 sm:px-6 md:px-8">
          <div className="bg-gray-800 flex h-64 sm:h-72 md:h-80 flex-col w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl justify-between p-4 sm:p-5 md:p-6 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
            {/* Header Text */}
            <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-full sm:max-w-3/4">
              Debit card under new <br />
              terms and conditions
            </h1>
  
            {/* Fast Calculation Section */}
            <div className="flex items-center gap-2 pl-3 rounded-lg bg-slate-400 h-8 sm:h-10 w-40 sm:w-44 md:w-48">
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
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <p className="text-white text-xs sm:text-sm">Fast calculation</p>
            </div>
  
            {/* Payments in 1 day Section */}
            <div className="flex items-center pl-3 gap-2 rounded-lg bg-slate-400 h-8 sm:h-10 w-40 sm:w-44 md:w-48">
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
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-white text-xs sm:text-sm">Payments in 1 day</p>
            </div>
  
            {/* Bottom Section */}
            <div className="flex justify-between items-center">
              {/* 24-hour Support Section */}
              <div className="flex items-center pl-3 gap-2 rounded-lg bg-slate-400 h-8 sm:h-10 w-40 sm:w-44 md:w-48">
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p className="text-white text-xs sm:text-sm">24-hour support</p>
              </div>
  
              {/* See More Button */}
              <a
                href="/debit"
                className="text-xs sm:text-sm text-white bg-black rounded-lg font-bold py-2 px-3 sm:py-3 sm:px-5 text-center transition-transform hover:scale-105"
              >
                See more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };
  