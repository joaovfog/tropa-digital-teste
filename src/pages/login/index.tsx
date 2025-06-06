import type { FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import eyeIcon from "../../assets/eye-icon.png";
import loginImage from "../../assets/login-image.png";
import logoImage from "../../assets/logo-image.png";
import * as S from "./styles";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    try {
      localStorage.setItem("auth", "true");

      window.dispatchEvent(new Event("authChange"));

      navigate("/dashboard");
    } catch {
      setError("Erro ao fazer login. Tente novamente.");
    }
  };

  return (
    <S.Container>
      <S.Card>
        <S.FormSide>
          <S.LogoImage>
            <img src={logoImage} alt="Tropa Digital" />
          </S.LogoImage>

          <h1>Bem-vindo de volta</h1>
          <span>Entre com sua conta para acessar o painel.</span>

          <form onSubmit={handleSubmit}>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="seunome@seuservidor.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Senha</label>
            <S.PasswordWrapper>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite aqui"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <S.EyeIcon
                onClick={() => setShowPassword(!showPassword)}
                role="button"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                <img src={eyeIcon} alt="Toggle password visibility" />
              </S.EyeIcon>
            </S.PasswordWrapper>

            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

            <button type="submit">Enviar</button>
          </form>
        </S.FormSide>

        <S.ImageSide>
          <img src={loginImage} alt="Login Illustration" />
        </S.ImageSide>
      </S.Card>
    </S.Container>
  );
}
