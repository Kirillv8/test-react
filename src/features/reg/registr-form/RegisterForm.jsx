import { useState } from "react";
import Button from "@shared/ui/button/Button";
import Input from "@shared/ui/input/Input";

const RegisterForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h3 style={{ color: "white", textAlign: "center" }}>Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder={"User email"}
          value={login}
          onChange={handleChangeLogin}
        />
        <Input
          type="password"
          placeholder={"Password"}
          value={password}
          onChange={handleChangePassword}
        />
        <Input
          type="password"
          placeholder={"Confirm your password"}
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
        <Button children={"Registration"} type="submit" />
      </form>
    </>
  );
};

export default RegisterForm;
