import AuthModal from "@widgets/autth/AuthModal";
import MainPage from "@pages/main/ui/Mainpage";
import UserProvider from "@shared/provider/UserProvider";
import { FilterProvider } from "@widgets/filters/model/FilterProvider";

function App() {
  return (
    <>
      {/* <AuthModal /> */}
      <UserProvider>
        <FilterProvider>
          <MainPage />
        </FilterProvider>
      </UserProvider>
    </>
  );
}

export default App;
