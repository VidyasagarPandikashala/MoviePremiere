import { Outlet } from "react-router-dom";

function RootPage() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootPage;
