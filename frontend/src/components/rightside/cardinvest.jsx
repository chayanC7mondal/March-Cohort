import apple from "../../assets/logo-apple.png";
import netfix from "../../assets/netflix.png";
import x from "../../assets/twitter (1).png";
import tesla from "../../assets/tesla.png";

export const CardInvest = () => {
  return (
    <>
      <div className="bg-white px-5 py-3 rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto shadow-md">
        
        {/* Header Section */}
        <div className="flex justify-between items-center w-full mb-5">
          <p className="text-black text-base sm:text-lg font-bold">My investments</p>
          <a
            href="/all"
            className="text-black text-sm sm:text-base font-bold flex items-center gap-1 hover:text-gray-700 transition"
          >
            See all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>

        {/* Investment List */}
        <div className="flex flex-col gap-6">
          {/* Investment Item 1 */}
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <div className="rounded-full bg-gray-300 p-2">
                <img src={apple} alt="apple" className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <p className="text-sm sm:text-base">Apple</p>
            </div>
            <p className="text-green-400 font-bold text-sm sm:text-base">
              +0.33%
            </p>
          </div>

          {/* Investment Item 2 */}
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <div className="rounded-full bg-gray-300 p-2">
                <img
                  src={netfix}
                  alt="netflix"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </div>
              <p className="text-sm sm:text-base">Netflix</p>
            </div>
            <p className="text-red-600 font-bold text-sm sm:text-base">
              -4.96%
            </p>
          </div>

          {/* Investment Item 3 */}
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <div className="rounded-full bg-gray-300 p-2">
                <img src={x} alt="X" className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <p className="text-sm sm:text-base">X</p>
            </div>
            <p className="text-green-400 font-bold text-sm sm:text-base">
              +24.13%
            </p>
          </div>

          {/* Investment Item 4 */}
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <div className="rounded-full bg-gray-300 p-2">
                <img src={tesla} alt="tesla" className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <p className="text-sm sm:text-base">Tesla</p>
            </div>
            <p className="text-red-600 font-bold text-sm sm:text-base">
              -4.96%
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
