'use client'
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import ChatHeader from "@/app/components/chatComp/chatHeader"
import ChatContent from "../components/chatComp/chatContent";
import { messages } from "../components/chatComp/messages";

export interface Message {
  text: string;
  sentBy: string;
  isChatOwner: boolean;
}

export default function chat() {

  
  
  const [allMessages, setAllMessages] = useState<Message[]>(messages);
  console.log(allMessages);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const response = await fetch('@/app/components/chatComp/message.json');
  //       console.log(response)
  //       const data = await response.json();
  //       setMessages(data);
  //       console.log(messages);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
          <div className="flex flex-col text-slate-100 h-screen w-full">
            <div className=""><Navbar pageName="chat"/></div>
            <div className=" w-[90%] h-[87%] m-auto">
              <div className="w-full h-full flex justify-between items-center ">
                <div className="w-[35%] h-full bg-[#323232] rounded-xl">
                
                </div>
                <div className="w-[60%] h-full bg-[#323232] rounded-xl">
                  <ChatHeader name="Nems"/>
                  <ChatContent messages={allMessages}/>
                </div>
              </div>
            </div>
          </div>

  )
}