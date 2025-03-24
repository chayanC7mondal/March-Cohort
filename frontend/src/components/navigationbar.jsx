import me from "../assets/me.jpg";
export const NavigationBar = () => {
  return (
    <>
      <div className="pr-5 pb-2 pl-5 flex justify-between items-center border border-b-gray-300 ">
        <a href="/" className="text-3xl font-bold text-black font-serif ">
          Om Tours
        </a>
        <div>
          <ul className=" flex gap-5 font-bold">
            <li className="inline-block p-2 hover:underline underline-offset-[25px] ">
              <a href="/" className="text-black">
                Home
              </a>
            </li>
            <li className="inline-block p-2 hover:underline underline-offset-[25px] ">
              <a href="/transactiom" className="text-black">
                Transactions
              </a>
            </li>
            <li className="inline-block p-2 hover:underline underline-offset-[25px]">
              <a href="/pay" className="text-black">
                Payments
              </a>
            </li>
            <li className="inline-block p-2 hover:underline underline-offset-[25px]">
              <a href="/Desposits" className="text-black">
                Desposits
              </a>
            </li>
            <li className="inline-block p-2 hover:underline underline-offset-[25px]">
              <a href="/Credits" className="text-black">
                Credits
              </a>
            </li>
            <li className="inline-block p-2 hover:underline underline-offset-[25px]">
              <a href="/archive" className="text-black">
                Archieve
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2">
          <a href="/compte" className="font-bold text-lg font-sans">
            Chayan Mondal
          </a>

          <img
            src={me}
            alt="me"
            className="size-12 object-cover rounded-full"
          />
        </div>
      </div>
    </>
  );
};
