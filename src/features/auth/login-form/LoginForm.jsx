import { useState } from "react";
import Button from "@shared/ui/button/Button";
import Input from "@shared/ui/input/Input";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prewCredentials) => ({
      ...prewCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Пользователь успешно зарегистрирован.
     Login: ${credentials.email}
     Password: ${credentials.password}`);
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <h3 style={{ color: "white", textAlign: "center" }}>Login Form</h3>
        <Input
          type="text"
          name="email"
          placeholder={"Username"}
          value={credentials.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Input
          type="password"
          name="password"
          placeholder={"Password"}
          value={credentials.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Button children={"LOGIN"} type="submit" />
      </form>
    </>
  );
};

export default LoginForm;
