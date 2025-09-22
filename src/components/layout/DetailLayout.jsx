import NavbarDetail from "./NavbarDetail";
import { Outlet } from "react-router-dom";

function DetailLayout() {
  return (
    <div>
      <NavbarDetail />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DetailLayout;
