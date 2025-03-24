import { DebitCard } from "../cards/DebitCard";
import { CardStatis } from "./cardStatis";
import { MedleSection } from "./medleSection";

export const CenterSection = () => {
  return (
    <>
      <section className="w-full max-w-[750px] flex flex-col items-center gap-5 px-4 md:w-[90%] sm:w-full">
        {/* Search Bar */}
        <div className="flex rounded-xl overflow-hidden bg-white h-14 justify-between w-full relative shadow-md">
          <input
            type="text"
            className="p-2 h-14 w-full border-none bg-white outline-none text-md"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="gray"
            className="size-6 absolute right-3 top-1/2 -translate-y-1/2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        {/* Debit Card */}
        <div className="w-full">
          <DebitCard />
        </div>

        {/* Medle Section */}
        <div className="w-full">
          <MedleSection />
        </div>

        {/* Card Statistics */}
        <div className="w-full">
          <CardStatis />
        </div>
      </section>
    </>
  );
};
