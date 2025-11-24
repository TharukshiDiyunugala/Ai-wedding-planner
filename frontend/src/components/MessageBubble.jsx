import { User, Bot } from 'lucide-react';

const MessageBubble = ({ message, isUser }) => {
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'} mb-4`}>
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
        isUser ? 'bg-gradient-to-r from-primary-500 to-secondary-500' : 'bg-gray-200'
      }`}>
        {isUser ? (
          <User className="h-6 w-6 text-white" />
        ) : (
          <Bot className="h-6 w-6 text-gray-600" />
        )}
      </div>
      
      <div className={`flex-1 max-w-2xl ${isUser ? 'text-right' : 'text-left'}`}>
        <div className={`inline-block px-4 py-3 rounded-2xl ${
          isUser 
            ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white' 
            : 'bg-white shadow-md text-gray-800'
        }`}>
          <p className="whitespace-pre-wrap">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
