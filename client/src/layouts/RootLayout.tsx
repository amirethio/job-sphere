import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
// import Details from "../Pages/Details";



function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Details/> */}
    </>
  );
}

export default RootLayout