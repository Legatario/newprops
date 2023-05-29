import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./menu/Menu";
import Home from "../../pages/home/component/Home";
import Register from "../../pages/register/component/Register";
import Messages from "../../pages/message/component/Messages";


const Display = () =>{
    const [messages, setMessages] = useState([]);

    const handleRegister = (newRegister) =>{
        setMessages([...messages, newRegister]);
    };

    return(
        <Router>
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Register  onRegister={handleRegister}/>} />
            <Route path="/mensagens" element={<Messages  onMsg={messages}/>} />
          </Routes>
        </div>
      </Router>
    )
}

export default Display