import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { split } from "../../animations/text";
import scroll from "../../animations/scroll";
import { useEffect } from "react";

scroll();

function AppLayout() {
  useEffect(() => {
    split();
  });

  return (
    <div className="home" data-scroll-container>
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
