import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./ui/Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="h-screen">
      {isLoading && <Loader />}
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
