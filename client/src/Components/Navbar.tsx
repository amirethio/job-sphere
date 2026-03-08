import logo from "./../assets/img/logo.png";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";


function Navbar() {
  const navigate = useNavigate()
  return (
    <header className="flex justify-around items-center h-17 font-medium bg-white">
      <div className="" >
        <img className="bg-blue h-13 rounded-lg" src={logo} alt="" onClick={()=>{
          navigate("/");
        }}  />
      </div>
      <div className="w-4/10">
        <ul className="flex justify-around align-middle font-medium">
          <li>
            <a href="#">Job Search</a>
          </li>
          <li>
            <a href="#">My Applications</a>
          </li>
          <li>
            <a href="#">Companies</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 text-white ">
        <button className="bg-blue px-6 py-2 rounded-lg">
          <NavLink to="/login">Login</NavLink>
        </button>
        <button className="bg-white px-6 py-2 rounded-lg text-black border-blue border-2">
          <NavLink to="/register">sign up</NavLink>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
