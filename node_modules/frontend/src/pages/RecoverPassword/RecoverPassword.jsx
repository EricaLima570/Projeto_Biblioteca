import React, { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import "./RecoverPassword.css";
import library from "../../assets/library.png";
import Navbar from "../../components/Navbar/Navbar";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Por favor, insira um e-mail válido.");
      return;
    }
    setMessage("Se o e-mail estiver cadastrado, você receberá instruções em breve.");
  };

  return (
    <div>
      {/* Navbar fixo no topo */}
      <Navbar />

      {/* Conteúdo principal */}
      <div className="login-wrapper">
        <img src={library} alt="livraria" className="imagem-lado" />
        <div className="login-container">
          <h1>Recuperação de Senha</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>E-mail</label>
              <FormInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <Button>Enviar</Button>
          </form>

          {message && <p className="message">{message}</p>}

          <div className="forgot-password">
            <a href="/">Voltar para o Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;