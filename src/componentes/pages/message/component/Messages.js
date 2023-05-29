import React from "react";

const Messages = ({ onMsg }) => {
  return (
    <div>
        <h2>Mensagens</h2>
            <div>
                {onMsg.map((message, index) => (
                    <div key={index} >
                        <p>Nome: {message.name}</p>
                        <p>Email: {message.email}</p>
                        <div>
                            <p>Comentario:</p>
                            <p>{message.message}</p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  );
};

export default Messages;