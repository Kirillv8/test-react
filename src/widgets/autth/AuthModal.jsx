import Modal from "@shared/ui/modal/Modal";
import RegisterForm from "@features/reg/registr-form/RegisterForm";
import LoginForm from "@features/auth/login-form/LoginForm";
// import { useState } from "react";

const AuthModal = () => {
  // позже создать header и сделать условный рендеринг
  //   const { isVisibleLogin, setIsVisibleLogin } = useState(true);
  //   const { isVisibleRegistr, setIsVisibleRegistr } = useState(false);

  //   const hideVisibleLogin = () => {
  //     setIsVisibleLogin(!true);
  //   };

  //   const showLoginWindow = () => {
  //     setIsVisibleLogin(!false);
  //   };

  //   const hideVisibleRegModal = () => {
  //     setIsVisibleRegistr(!true);
  //   };

  //   const showRegistrWindow = () => {
  //     setIsVisibleRegistr(!false);
  //   };

  return (
    <>
      <Modal>
        <RegisterForm />
        {/* <LoginForm /> */}
      </Modal>
    </>
  );
};

export default AuthModal;
