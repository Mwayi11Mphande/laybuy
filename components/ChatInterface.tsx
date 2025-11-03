// components/ChatInterface.tsx
'use client';
import { useState } from 'react';

interface ChatMessage {
  id: number;
  buyerName: string;
  message: string;
  timestamp: string;
  isSeller: boolean;
  read: boolean;
}

export default function ChatInterface() {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState('');
  
  const [chats] = useState([
    {
      id: 1,
      buyerName: 'Sarah Johnson',
      lastMessage: 'Hi, is this backpack waterproof?',
      unread: true,
      timestamp: '2 min ago'
    },
    {
      id: 2,
      buyerName: 'Mike Chen',
      lastMessage: 'When will the shirt be back in stock?',
      unread: false,
      timestamp: '1 hour ago'
    },
    {
      id: 3,
      buyerName: 'Emma Davis',
      lastMessage: 'Thanks for the quick shipping!',
      unread: false,
      timestamp: '2 hours ago'
    }
  ]);

  const [messages] = useState<ChatMessage[]>([
    {
      id: 1,
      buyerName: 'Sarah Johnson',
      message: 'Hi, is this backpack waterproof?',
      timestamp: '2:30 PM',
      isSeller: false,
      read: true
    },
    {
      id: 2,
      buyerName: 'You',
      message: 'Yes, it\'s made with waterproof material!',
      timestamp: '2:31 PM',
      isSeller: true,
      read: true
    },
    {
      id: 3,
      buyerName: 'Sarah Johnson',
      message: 'Great! Does it come with a warranty?',
      timestamp: '2:32 PM',
      isSeller: false,
      read: false
    }
  ]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // Here you would typically send the message to your backend
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg h-96 flex">
      {/* Chat List */}
      <div className="w-1/3 border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h4 className="font-semibold text-gray-900">Conversations</h4>
        </div>
        <div className="overflow-y-auto h-full">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                selectedChat === chat.id ? 'bg-blue-50 border-blue-200' : ''
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-semibold text-gray-900">{chat.buyerName}</h5>
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500">{chat.timestamp}</span>
                  {chat.unread && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full ml-auto mt-1"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200">
              <h4 className="font-semibold text-gray-900">
                {chats.find(c => c.id === selectedChat)?.buyerName}
              </h4>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isSeller ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.isSeller
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.message}</p>
                    <p className={`text-xs mt-1 ${
                      message.isSeller ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={sendMessage} className="p-4 border-t border-gray-200">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 font-semibold"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  );
}