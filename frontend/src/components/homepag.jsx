
import { CenterSection } from "./centerside/centerSection"
import { LeftSection } from "./leftside/leftSection"
import { RightSection } from "./rightside/rightsection"

export const HomePage = () => {
    return(

        <>
        <div className="flex justify-between m-5">
           <LeftSection/>

            <CenterSection/>
            <RightSection/>
            

        </div>

        </>
    )}