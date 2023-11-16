'use client'
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import ChatHeader from "@/app/components/chatComp/chatHeader"
import ChatContent from "../components/chatComp/chatContent";
// import { messages, conversations } from "../components/chatComp/messages";
import ChatInput from "../components/chatComp/chatInput";
import ConversComp from "../components/chatComp/conversComp";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import store from "../store/store";
import { useDispatch } from "react-redux";
import { fetchChatData } from "../Slices/chatSlice";
import { useCookies } from 'react-cookie';
import { messages } from "../components/chatComp/messages";
import axios from "axios";

export interface Message {
  avatar: string,
  content: string;
  sender: string;
  isOwner: boolean;
}

export interface Conversation {
  id: number;
  online: boolean;
  username: string;
  avatar: string;
  owner:string
  timestamp?: number;
  messages: Message[];
}

export default function chat() {
  const dispatch = useDispatch<AppDispatch>();
  const conversations: Conversation[] = useSelector((state: RootState) => state.chat?.entity);
  const [selectedConv, setSelectedConv] = useState<Conversation[]>(conversations);

  useEffect(() => {
    console.log("test")
    console.log('Dispatching fetchChatData...');
    dispatch(fetchChatData());
  }, [])

  useEffect(() => {
    setSelectedConv(conversations)
  }, [conversations])

  // const [allMessages, setAllMessages] = useState<Message[]>(selectedConv[0].messages);

  
  const [selectConvId, setSelectConvId] = useState<number>(1);
  
  // console.log(allMessages);
  const handleSendMessage = (newMessage: string) => {
    if (selectConvId !== null) {
      const timestamp = Date.now();
      const updatedConversations = selectedConv.map((conversation: any) =>
        conversation.id === selectConvId
          ? {
              ...conversation,
              timestamp: timestamp,
              messages: [
                ...conversation.messages,
                {
                  avatar: conversation.avatar,
                  content: newMessage,
                  sender: conversation.owner,
                  isOwner: true,
                },
              ],
            }
          : conversation
      );

      setSelectedConv(updatedConversations);
      
    // const newChatMessage: Message = {
    //   avatar:"",
    //   text: newMessage,
    //   sentBy: 'owner',
    //   isChatOwner: true,
    // };
    // setAllMessages((prevMessages) => [...prevMessages, newChatMessage]);
    }
  }

  const sortedConversations = selectedConv.slice().sort((a, b) => {
    const timestampA = a.timestamp || 0;
    const timestampB = b.timestamp || 0;
    return timestampB - timestampA;
  });

  return (
          <div className="flex flex-col text-slate-100 h-screen w-full">
            <div className=""><Navbar pageName="chat"/></div>
            <div className=" w-[90%] h-[87%] m-auto">
              <div className="w-full h-full flex justify-between items-center ">
                <div className="flex flex-col  h-full w-[30%] rounded-xl">
                  <div className="h-20 py-3 border-b rounded-lg bg-[#323232] border-b-[#E58E27]">Header</div>
                  <div className="h-[95] w-full  overflow-y-auto scrollbar-hide rounded-xl">
                      {sortedConversations.map((conversation: Conversation) => (
                        <div key={conversation.id} className="h-20 w-full bg-opacity-20 bg-white shadow-sm shadow-white">
                          <button
                          
                          onClick={() => setSelectConvId(conversation.id)}
                          className="w-full h-full bg-white bg-opacity-10 transition duration-500 ease-in-out hover:text-orange-500 hover:bg-opacity-100"
                          ><ConversComp conversation={conversation}/>
                          </button>
                        </div>
                      ))}

                  </div>
                </div>
                <div className="w-[60%] h-full bg-[#323232] rounded-xl">
                  <ChatHeader name="Nems"/>
                  <ChatContent messages={selectedConv.find((conversation) => conversation.id === selectConvId)?.messages || []}/>
                  <ChatInput onSendMessage={handleSendMessage} conversation={sortedConversations.find((conversation) => conversation.id === selectConvId)}/>
                </div>
              </div>
            </div>
          </div>

  )
}