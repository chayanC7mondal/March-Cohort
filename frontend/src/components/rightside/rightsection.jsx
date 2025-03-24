import { BigCardRight } from "./bigCardRight"
import { CardInvest } from "./cardinvest"
import { SmallCardRight } from "./SmallCardRight"

export const RightSection = ()=>{
    return(
        <>
        <div className="flex flex-col gap-3">
          <CardInvest/>
          <SmallCardRight/>
          <BigCardRight/>

        </div>
        </>
    )
}