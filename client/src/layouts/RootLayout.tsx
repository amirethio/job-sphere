import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";



function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default RootLayout