import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages, isLoading, setIsLoading }) {
  const [textInput, setTextInput] = useState("");
  function changeText(event) {
    setTextInput(event.target.value);
  }
  async function sendMessage() {
    // panggil setter dari state,
    // di react kita tidak bisa mengubah data secara langsung, tapi kita membuat copyan dari datanya dan kemudian mengganti data nya dengan data baru
    // setChatMessages([
    // 	...chatMessages, // ini mengambil values dari array, kemudian copy datanya menjadi data baru
    // 	// kemudian setelah koma ini adalah value yang akan di tambahkan ke copyan array nya
    // 	{
    // 		message: textInput ,
    // 		sender: "user",
    // 		id: crypto.randomUUID()
    // 	}
    // ]);

    // State tidak akan langsung ke update ketika kita update statenya, melainkan dia tunggu hingga semua code selesai dijalankan, jadi ketika kita buat immidiate update state seperti di atas, maka jika kita immidiate update jg di bawah. maka yang di atas tdk akan di gunakan.
    // Oleh karena itulah kita tampung di variabel dlu
    const newSetOfMessages = [
      ...chatMessages,
      {
        message: textInput,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    // Update state nya dengan variabel baru
    setChatMessages(newSetOfMessages);
    setTextInput("");
    setIsLoading(true);
    const response = await Chatbot.getResponseAsync(textInput);
    setIsLoading(false);

    setChatMessages([
      ...newSetOfMessages, // buat copyan dari array variabel baru
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
  }

  function keyHandler(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setTextInput("");
    }
  }
  function reset() {
    setChatMessages([]);
  }
  return (
    <div className="input-container">
      <input className="prompt-field" placeholder="Send a message to chatbot!" size="50" onChange={changeText} value={textInput} onKeyDown={keyHandler} disabled={isLoading} />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
      <button onClick={reset} className="reset-button">
        Reset
      </button>
    </div>
  );
}