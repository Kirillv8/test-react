import AuthModal from "@widgets/autth/AuthModal";
import MainPage from "@pages/main/ui/Mainpage";
import UserProvider from "@shared/provider/UserProvider";
import { GenresProvider } from "@widgets/filters/model/FilterProvider";

function App() {
  return (
    <>
      {/* <AuthModal /> */}
      <UserProvider>
        <GenresProvider>
          <MainPage />
        </GenresProvider>
      </UserProvider>
    </>
  );
}

export default App;
