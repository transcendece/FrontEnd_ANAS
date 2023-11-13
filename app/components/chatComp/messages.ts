import { Message } from "@/app/chat/page"

export const messages:Message[] = [
    {
      "text": "Hey!",
      "sentBy": "owner",
      "isChatOwner": true
    },
    {
      "text": "Hey, devlazar!",
      "sentBy": "anon",
      "isChatOwner": false
    },
    {
      "text": "Do you like this chat?",
      "sentBy": "owner",
      "isChatOwner": true
    },
    {
      "text": "Looks nice!",
      "sentBy": "anon",
      "isChatOwner": false
    }
  ]