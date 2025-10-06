import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! 👋 ¡Hola!\n\nI'm your Houston Phone AI assistant. I can help you in English, Spanish, or any language!\n\nSoy tu asistente de IA de Houston Phone. ¡Puedo ayudarte en inglés, español o cualquier idioma!\n\nHow can I assist you today? / ¿Cómo puedo ayudarte hoy?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `You are a multilingual customer service assistant for Houston Phone, a professional mobile device repair and service center with locations in El Campo, Houston West, and Houston South.

IMPORTANT: Automatically detect the language the customer is using and respond in that SAME language. You are fluent in English, Spanish, and all other languages. Always match the customer's language preference.

Services we offer:
- Screen repairs and replacements / Reparaciones de pantalla
- Battery replacements and charging port repairs / Reemplazo de batería y puerto de carga
- Carrier unlocking for all carriers / Desbloqueo de operador
- Bill payment services for all major carriers / Pago de facturas
- Premium mobile accessories / Accesorios premium
- Comprehensive device repairs / Reparaciones integrales

Our features:
- Certified factory-trained technicians / Técnicos certificados
- 90-day warranty on all repairs / Garantía de 90 días
- OEM parts / Partes OEM originales
- Same-day service available / Servicio el mismo día
- Flexible payment plans / Planes de pago flexibles

Contact:
Phone: (832) 991-6859
Hours: Monday-Saturday, 10AM-7PM / Lunes-Sábado, 10AM-7PM
Locations: El Campo, Houston West, Houston South

Be friendly, professional, and helpful in ANY language. Keep responses concise but informative. If the customer writes in Spanish, respond in Spanish. If they write in English, respond in English. If they write in any other language, respond in that language.`,
            },
            ...messages,
            userMessage,
          ],
          max_tokens: 250,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.choices[0].message.content,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but I'm having trouble connecting right now. Please call us at (832) 991-6859 or visit one of our locations for immediate assistance!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] bg-accent hover:bg-accent/90 text-white rounded-full p-3 md:p-4 shadow-2xl transition-all hover:scale-110 animate-bounce touch-manipulation"
          aria-label="Open chat"
        >
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      )}

      {/* Chat Window - Mobile Responsive with Highest Z-Index */}
      {isOpen && (
        <div className="fixed inset-x-4 top-20 bottom-4 md:top-auto md:bottom-6 md:right-6 md:left-auto z-[9999] w-auto md:w-96 h-auto md:h-[600px] max-h-[calc(100vh-6rem)] md:max-h-[700px] bg-white rounded-2xl shadow-2xl flex flex-col border-2 border-accent/20 animate-fade-in">
          {/* Header - Mobile Optimized */}
          <div className="bg-gradient-to-r from-accent to-accent/90 text-white p-3 md:p-4 rounded-t-2xl flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2 md:gap-3 min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-sm md:text-base truncate">Houston Phone Assistant</h3>
                <p className="text-xs opacity-90">Powered by AI</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-lg p-2 transition-colors flex-shrink-0 touch-manipulation"
              aria-label="Close chat"
            >
              <X className="h-5 w-5 md:h-5 md:w-5" />
            </button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-accent text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <Loader2 className="h-5 w-5 text-accent animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input - Mobile Optimized */}
          <div className="p-3 md:p-4 border-t border-gray-200 flex-shrink-0">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 text-sm md:text-base"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-accent hover:bg-accent/90 touch-manipulation"
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center leading-tight">
              Call us: (832) 991-6859 • Mon-Sat 10AM-7PM
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
