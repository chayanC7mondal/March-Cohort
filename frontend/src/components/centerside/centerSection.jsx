import { DebitCard } from "../cards/DebitCard"
import { CardStatis } from "./cardStatis"
import { MedleSection } from "./medleSection"

export const CenterSection = () => {
    return(
        <>
        <section className="w-1/2 flex flex-col items-center gap-3 relative">
            <div className=" flex rounded-xl overflow-hidden bg-white h-14  justify-between w-[750px] items-center ">
             <input type="text" className=" p-2 h-14   w-full border border-none   bg-white" placeholder="Search"/>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-6 absolute  right-2 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

             </div>
             <DebitCard/>
             <MedleSection/>
             <CardStatis/>
        </section>
       
        </>
    )
}