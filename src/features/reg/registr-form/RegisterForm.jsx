import { useState } from "react";
import Button from "@shared/ui/button/Button";
import Input from "@shared/ui/input/Input";

const RegisterForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Пользователь успешно зарегистрирован.
     Login: ${credentials.email}
     Password: ${credentials.password}
     Confirm: ${credentials.confirmPassword}`);
  };
  return (
    <>
      <h3 style={{ color: "white", textAlign: "center" }}>Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          placeholder={"User email"}
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
        <Input
          type="password"
          name="confirmPassword"
          placeholder={"Confirm your password"}
          value={credentials.confirmPassword}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Button children={"Registration"} type="submit" />
      </form>
    </>
  );
};

export default RegisterForm;
