import {FirstCard} from './firstCard'
import {SecondCard} from './secondCard'
import {ThirdCard} from './thirdCard'
export const LeftSection = () => {
    return(

        <>
         <div className="flex flex-col h-full gap-3 w-1/4">
           <FirstCard/>
           <SecondCard/>
           <ThirdCard/>
           </div>
        </>
    )}