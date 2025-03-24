import DonutChart from "./donatChart";

export const CardStatis = () => {
    return (
        <>
            <div className="rounded-2xl bg-white grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-5 md:p-6 gap-6 shadow-lg">
                {/* Left Section */}
                <div className="flex flex-col gap-6">
                    <p className="text-lg font-semibold font-serif">Transactions in January</p>

                    {/* Tabs Section */}
                    <div className="flex gap-3 flex-wrap">
                        <a className="rounded-xl font-semibold bg-gray-900 text-white text-center py-2 px-3 cursor-pointer hover:bg-gray-800 transition">
                            Spending
                        </a>
                        <a className="rounded-xl font-semibold bg-gray-200 text-center py-2 px-3 cursor-pointer hover:bg-gray-300 transition">
                            Deposits
                        </a>
                    </div>

                    {/* Categories Section */}
                    <div className="flex gap-3 flex-wrap">
                        <div className="flex rounded-xl bg-orange-100 py-2 px-3 items-center gap-3">
                            <div className="size-2 rounded-full bg-yellow-400"></div>
                            <p className="font-semibold">Credits</p>
                        </div>
                        <div className="flex rounded-xl bg-orange-200 py-2 px-3 items-center gap-3">
                            <div className="size-2 rounded-full bg-orange-500"></div>
                            <p className="font-semibold">Transfers</p>
                        </div>
                        <div className="flex rounded-xl bg-pink-100 py-2 px-3 items-center gap-3">
                            <div className="size-2 rounded-full bg-orange-700"></div>
                            <p className="font-semibold">Markets</p>
                        </div>
                        <div className="flex rounded-xl bg-violet-300 py-2 px-3 items-center gap-3">
                            <div className="size-2 rounded-full bg-violet-700"></div>
                            <p className="font-semibold">Restaurants</p>
                        </div>
                        <div className="flex rounded-xl bg-blue-200 py-2 px-3 items-center gap-3">
                            <div className="size-2 rounded-full bg-blue-700"></div>
                            <p className="font-semibold">Clothes</p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Donut Chart */}
                <div className="flex justify-center items-center">
                    <DonutChart />
                </div>
            </div>
        </>
    );
};
