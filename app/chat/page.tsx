import Navbar from "../components/Navbar"

export default function chat() {

  return (
          <div className="flex flex-col text-slate-100 h-screen w-full">
            <div className=""><Navbar pageName="chat"/></div>
            <div className=" w-[90%] h-[87%] m-auto">
              <div className="w-full h-full flex justify-between items-center ">
                <div className="w-[35%] h-full bg-[#323232] rounded-xl">
                
                </div>
                <div className="w-[60%] h-full bg-[#323232] rounded-xl">
  
                </div>
              </div>
            </div>
          </div>

  )
}