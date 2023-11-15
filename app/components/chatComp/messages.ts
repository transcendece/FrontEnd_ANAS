import { Conversation, Message } from "@/app/chat/page"

export const messages:Message[] = [
    {
      "avatar": "path/to/hight",
      "text": "Hey!",
      "sentBy": "owner",
      "isChatOwner": true
    },
    {
      "avatar": "path/to/hight",

      "text": "Hey, friend!",
      "sentBy": "anon",
      "isChatOwner": false
    },
  ]

  export const conversations:Conversation[] = [
    {
      "id": 1,
      "title": "chat1",
      "messages": [
        {
          "avatar": "path",
          "text": "Hey!",
          "sentBy": "owner",
          "isChatOwner": true
        },
        {
          "avatar": "path",
          "text": "Hey, friend!",
          "sentBy": "anon",
          "isChatOwner": false
        },
      ]
    },
    {
      "id": 2,
      "title": "chat2",
      "messages": [
        {
          "avatar": "path",
          "text": "wech wechh!",
          "sentBy": "Farid",
          "isChatOwner": true
        },
        {
          "avatar": "path",
    
          "text": "Hey, famila!",
          "sentBy": "doudou",
          "isChatOwner": false
        },
      ]
    }
  ]
