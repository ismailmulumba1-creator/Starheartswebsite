import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot, Minimize2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PROGRAMS, FACILITIES, ACADEMY_HISTORY, PHILOSOPHY, UPCOMING_EVENTS } from '../constants';

const ACADEMY_CONTEXT = `
You are Ismail, the dedicated AI assistant for Star Hearts Sports Academy. 
Your goal is to assist parents, potential players, and visitors by answering their questions about the academy accurately and enthusiastically.

Key Information about Star Hearts Sports Academy:
- History: ${ACADEMY_HISTORY}
- Philosophy: ${PHILOSOPHY}
- Location: Kawempe, Kampala, Uganda.
- Contact: +256 700 123 456, info@starheartsacademy.com

Programs:
${PROGRAMS.map(p => `- ${p.title} (${p.ageGroup}): ${p.description} Schedule: ${p.schedule}. Costs: ${p.pricing.map(pr => pr.name + ' ' + pr.amount).join(', ')}`).join('\n')}

Facilities:
${FACILITIES.map(f => `- ${f.name}: ${f.description}`).join('\n')}

Upcoming Events:
${UPCOMING_EVENTS.map(e => `- ${e.title}: ${e.date} at ${e.time}`).join('\n')}

If asked about something not in this list, answer generally about football academies if safe, or refer them to the contact details. 
Always remain polite, professional, and helpful. 
Keep responses concise but informative.
`;

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Hello! I'm Ismail. How can I help you with Star Hearts Sports Academy today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const initializeChat = async () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        console.warn("API Key missing for Chatbot");
        return;
    }
    
    try {
        const ai = new GoogleGenAI({ apiKey });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-3-pro-preview',
          config: {
            systemInstruction: ACADEMY_CONTEXT,
          },
          history: [
            { role: 'model', parts: [{ text: "Hello! I'm Ismail. How can I help you with Star Hearts Sports Academy today?" }] }
          ]
        });
    } catch (e) {
        console.error("Failed to initialize chat", e);
    }
  };

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
        initializeChat();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
        if (!chatSessionRef.current) {
            await initializeChat();
        }
        
        if (chatSessionRef.current) {
            const result = await chatSessionRef.current.sendMessage({ message: userMessage });
            const responseText = result.text;
            setMessages(prev => [...prev, { role: 'model', text: responseText }]);
        } else {
             // Fallback if API key is missing or init failed
             setMessages(prev => [...prev, { role: 'model', text: "I'm currently unable to connect. Please contact the academy directly at +256 700 123 456." }]);
        }
    } catch (error) {
        console.error("Chat error", error);
        setMessages(prev => [...prev, { role: 'model', text: "I apologize, but I encountered an error. Please try asking again." }]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-bounce-subtle"
          aria-label="Chat with Ismail"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-6 z-50 w-[90vw] md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[600px] h-[70vh] animate-slide-up font-sans">
          {/* Header */}
          <div className="bg-primary text-white p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none">Ismail</h3>
                <span className="text-xs text-white/80">AI Assistant</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
                <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
                    <X size={20} />
                </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-500 border border-gray-100 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center">
                  <Loader2 size={16} className="animate-spin mr-2" />
                  <span className="text-xs">Ismail is typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-full border border-gray-200 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about programs, fees..."
                className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-2 text-sm outline-none text-gray-700 placeholder-gray-400"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-[10px] text-center text-gray-400 mt-2">
                Powered by Gemini AI • Responses may vary
            </div>
          </div>
        </div>
      )}
    </>
  );
};