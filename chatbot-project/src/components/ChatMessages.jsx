import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
  //useRef adalah sebuah function untuk mengambil html elemen dengan mengggunakan ref, dan menyimpannya dalam variabel atau di dalam useRef ini
  const chatMessageRef = useRef(null);
  // use effect adalah sebuah function yang akan menjalankan callback function setiap kali komponen di buat atau di update
  useEffect(() => {
    // current sepertinya komponent ref yang terakhir kali di update deh
    const containerElem = chatMessageRef.current;
    if (containerElem) {
      window.scrollTo(0, containerElem.scrollHeight);
    }
  }, [chatMessages]);
  // Parameter ke-2 adalah menentukan kapan useEffect akan berjalan secara default yakni array kosong [], maka tiap komponen di update atau di ubah maka useeffect akan jalan
  return (
    // Gunakan fragment karena .map akan generate banyak line
    // onClick = Event(always camelCase) ------ sendMessage = EventHandler
    <div className="message-container" ref={chatMessageRef}>
      {chatMessages.map((chatMessage) => {
        return <ChatMessage message={chatMessage.message} sender={chatMessage.sender} key={chatMessage.id} />;
      })}
    </div>
  );
}

export default ChatMessages;