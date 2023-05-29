import React, { useState } from "react";


const Register = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
      });

    const [error, setError] = useState("");  

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setError("")
        setFormData((prevData) =>({
            ...prevData,
            [name]: value,
        }))
    }

    

    const handleSubmit = (e) =>{
        e.preventDefault();

          // Verificar se os campos obrigatórios estão preenchidos
        if (!formData.name || !formData.email || !formData.message) {
          setError("Por favor, preencha todos os campos obrigatórios.");
          return;
        }
        onRegister(formData)
        console.log(formData)
        setError("")
        setFormData({
            name: "",
            email: "",
            message: ""
          });
    }
    
 
  return (
    <div>
    <h2 className="fs-1">Cadastro de Usuário</h2>
    <form onSubmit={handleSubmit} className="p-3 m-0 border-0 bd-example">
      <div className="mb-3">
      <label htmlFor="name" className="form-label">
        Nome:
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        className="form-control"
      />
      </div>
      <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        className="form-control"
      />
      </div>
      <div className="mb-3">
      <label htmlFor="message" className="form-label">
        Mensagem:
      </label>
      <textarea
        value={formData.message}
        onChange={handleChange}
        name="message"
        id="message"
        className="form-control" 
        rows="3"
      ></textarea>
      </div>

      <button type="submit" className="btn btn-success">Cadastrar</button>
    </form>
    {error && <span className="text-danger">{error}</span>}
  </div>
);
};

export default Register;
