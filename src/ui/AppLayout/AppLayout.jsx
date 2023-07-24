import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function AppLayout() {
  return (
    <div>
      <Header />

      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
