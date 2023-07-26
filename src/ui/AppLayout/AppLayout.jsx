import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { split } from "../../animations/text";
import { useEffect } from "react";
import scroll from "../../animations/scroll";
scroll();

function AppLayout() {
  useEffect(() => {
    split();
  });

  return (
    <div className="home">
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
