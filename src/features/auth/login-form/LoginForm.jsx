import { useState } from "react";
import Button from "@shared/ui/button/Button";
import Input from "@shared/ui/input/Input";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    setLogin(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Пользователь успешно зарегистрирован.
     Login: ${login}
     Password: ${password}`);
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <h3 style={{ color: "white", textAlign: "center" }}>Login Form</h3>
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
    </>
  );
};

export default LoginForm;
