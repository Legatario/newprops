import React from "react";
import "./Messages.css"

const Messages = ({ onMsg }) => {
  return (
    <div>
        <h2 className="fs-1">Mensagens</h2>
            <div className="cards-container">
                {onMsg.map((message, index) => (
                    <div key={index} className="card">
                        <div className="card-body">
                            <p>Nome: {message.name}</p>
                            <p>Email: {message.email}</p>
                            <div>
                                <p>Comentario:</p>
                                <p>{message.message}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  );
};

export default Messages;