import { useState } from "react";
import Button from "@shared/ui/button/Button";
import Input from "@shared/ui/input/Input";
import "@src/features/auth/login-form/loginForm.css";

const LoginForm = () => {
  const { login, setLogin } = useState("");
  const { password, setPassword } = useState("");

  const handleChangeName = (e) => {
    setLogin(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Login submited ${login} ${password}`);
  };

  return (
    <div className="containerForm">
      <form onSubmit={handleSubmit}>
        <h3 style={{ color: "white" }}>Login Form</h3>
        <Input
          type="text"
          placeholder={"Username"}
          value={login}
          onChange={handleChangeName}
        />
        <Input
          type="password"
          placeholder={"Password"}
          value={password}
          onChange={handleChangePassword}
        />
        <Button children={"LOGIN"} type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
