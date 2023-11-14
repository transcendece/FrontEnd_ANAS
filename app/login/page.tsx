import Image  from "next/image"
import { Button } from "@mui/material"

export default function login() {

    return (

        <div className="flex items-end justify-end w-full h-full">
              <div className="w-1/3 flex justify-end mb-20 ml-20">
                <Button className="bg-[#E58E27] mb-20 -mr-20 w-1/2 h-24">
                    <a className="text-white"  href="http://localhost:5000/auth/42">connect<br></br>with</a>
                </Button>
              </div>
              <div className=" xMedium:min-w-[600px] hidden medium:block aligin-self-end">
                <Image className='' alt='' src={'/pingPaddles.png'} height={1200} width={1200}/>
              </div>
        </div>
    )
}
