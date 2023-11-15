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
      "id": 13,
      "title": "title1",
      "messages": [
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
    },
    {
      "id": 11,
      "title": "title2",
      "messages": [
        {
          "avatar": "path/to/hight",
          "text": "wech wechh!",
          "sentBy": "Farid",
          "isChatOwner": true
        },
        {
          "avatar": "path/to/hight",
    
          "text": "Hey, famila!",
          "sentBy": "doudou",
          "isChatOwner": false
        },
      ]
    }
  ]
