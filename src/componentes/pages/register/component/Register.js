import React, { useState } from "react";

const Register = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
      });

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormData((prevData) =>({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        onRegister(formData)
        console.log(formData)
        setFormData({
            name: "",
            email: "",
            message: ""
          });
    }
 
  return (
    <div>
    <h2>Cadastro de Usuário</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Mensagem:
        <textarea
          value={formData.message}
          onChange={handleChange}
          name="message"
        ></textarea>
      </label>
      <br />
      <button type="submit">Cadastrar</button>
    </form>
  </div>
);
};

export default Register;
