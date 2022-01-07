import "./App.css";
import { useState } from "react";

export default function App() {
  let [chat, setChat] = useState("");
  let [list, setList] = useState([]);

  function handleChat(e) {
    setChat(e.target.value);
    
  }

  function print() {
    if(chat=="")
    {
      alert("msg empty");
      return;
    }
    let newList = [...list, chat];
    setList(newList);
    setChat("");
  }

  return (
    <>
      {" "}
      <div className="d1">
        <span className="h1">MyChatApp</span>
        <span className="h6 d2">By Pranav Sharma 084 </span>
      </div>
      <div className="d3">
        <input
          type="text"
          onChange={handleChat}
          placeholder="Lets chat here..."
          className="d4"
          value ={chat}
        />{" "}
        <input type="button" value="send" onClick={print} className="d5" />
      </div>
      <div>
        {list.map((item) => (
          <div className="d6">{item}</div>
        ))}
      </div>
    </>
  );
}