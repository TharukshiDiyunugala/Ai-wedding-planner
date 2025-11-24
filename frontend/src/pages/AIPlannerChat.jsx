import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ChatInput from '../components/ChatInput';
import MessageBubble from '../components/MessageBubble';
import axios from 'axios';
import { Sparkles } from 'lucide-react';

const AIPlannerChat = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your AI wedding planning assistant. How can I help you plan your perfect wedding today?",
      isUser: false
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message) => {
    // Add user message
    setMessages(prev => [...prev, { text: message, isUser: true }]);
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/api/ai/chat`, {
        message,
        history: messages
      });

      // Add AI response
      setMessages(prev => [...prev, { 
        text: response.data.response, 
        isUser: false 
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        text: "I'm sorry, I encountered an error. Please try again.", 
        isUser: false 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 flex flex-col h-screen">
          <div className="p-6 bg-white border-b">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <Sparkles className="h-8 w-8 text-primary-500 mr-3" />
              AI Wedding Assistant
            </h1>
            <p className="text-gray-600 mt-1">Ask me anything about wedding planning</p>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, index) => (
              <MessageBubble
                key={index}
                message={msg.text}
                isUser={msg.isUser}
              />
            ))}
            
            {loading && (
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-primary-500"></div>
                </div>
                <div className="bg-white shadow-md px-4 py-3 rounded-2xl">
                  <p className="text-gray-500">Thinking...</p>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className="p-6 bg-white border-t">
            <ChatInput onSend={handleSendMessage} disabled={loading} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AIPlannerChat;
