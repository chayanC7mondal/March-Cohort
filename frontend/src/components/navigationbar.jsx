import { useState } from "react";
import me from "../assets/me.jpg";

export const NavigationBar = () => {
  // State to toggle the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <div className="pr-5 pl-5 py-3 flex justify-between items-center bg-white border-b border-gray-300 w-full min-w-full max-w-full">
        {/* Logo Section */}
        <a
          href="/"
          className="text-2xl sm:text-3xl font-bold text-black font-serif"
        >
          Om Tours
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-5 font-bold">
            <li className="inline-block p-2 hover:underline underline-offset-[8px]">
              <a href="/" className="text-black">
                Home
              </a>
            </li>
            <li className="inline-block p-2 hover:underline underline-offset-[8px]">
              <a href="/transaction" className="text-black">
                Transactions
              </a>
            </li>
            <li className="inline-block p-2 hover:underline underline-offset-[8px]">
              <a href="/pay" className="text-black">
                Payments
              </a>
            </li>
            <li className="inline-block p-2 hover:underline underline-offset-[8px]">
              <a href="/deposits" className="text-black">
                Deposits
              </a>
            </li>
            <li className="inline-block p-2 hover:underline underline-offset-[8px]">
              <a href="/credits" className="text-black">
                Credits
              </a>
            </li>
            <li className="inline-block p-2 hover:underline underline-offset-[8px]">
              <a href="/archive" className="text-black">
                Archive
              </a>
            </li>
          </ul>
        </div>

        {/* User Section - Always Visible */}
        <div className="flex justify-center items-center gap-2">
          <a
            href="/compte"
            className="hidden sm:block font-bold text-sm sm:text-lg font-sans"
          >
            Chayan Mondal
          </a>
          <img
            src={me}
            alt="me"
            className="w-8 h-8 sm:w-12 sm:h-12 object-cover rounded-full"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none ml-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-300 w-full">
          <ul className="flex flex-col gap-3 p-4 font-bold">
            <li>
              <a href="/" className="block text-black hover:bg-gray-100 p-2 rounded-lg">
                Home
              </a>
            </li>
            <li>
              <a
                href="/transaction"
                className="block text-black hover:bg-gray-100 p-2 rounded-lg"
              >
                Transactions
              </a>
            </li>
            <li>
              <a href="/pay" className="block text-black hover:bg-gray-100 p-2 rounded-lg">
                Payments
              </a>
            </li>
            <li>
              <a
                href="/deposits"
                className="block text-black hover:bg-gray-100 p-2 rounded-lg"
              >
                Deposits
              </a>
            </li>
            <li>
              <a href="/credits" className="block text-black hover:bg-gray-100 p-2 rounded-lg">
                Credits
              </a>
            </li>
            <li>
              <a href="/archive" className="block text-black hover:bg-gray-100 p-2 rounded-lg">
                Archive
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
