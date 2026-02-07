import AuthModal from "@widgets/autth/AuthModal";
import MainPage from "@pages/main/ui/Mainpage";
import UserProvider from "@shared/provider/UserProvider";

function App() {
  return (
    <>
      {/* <AuthModal /> */}
      <UserProvider>
        <MainPage />
      </UserProvider>
    </>
  );
}

export default App;
