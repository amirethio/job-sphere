import { useState, type ChangeEvent } from "react";
import axios from "axios";
import loginImg from "./../assets/img/login.png";
import logo from "./../assets/img/logo.png";
import { FcGoogle } from "react-icons/fc";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
   
function Register() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [message ,setMessage] =  useState("")
const navigate = useNavigate()
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
       await axios.post("http://localhost:4001/auth/register", formData);
    navigate("/login");
    } catch (error) {
      console.log(error);
      setMessage("something went wrong");
    }
  };

  return (
    <section className="flex bg-white">
      <div className="w-1/2">
        <section className="bg-white w-6/10 h-screen m-auto max-h-150 rounded-2xl mt-16 p-20">
          <img src={logo} alt="" className="bg-blue w-30 rounded-md" />
          <form>
            <h2 className="text-2xl font-semibold mt-3 ">
              Create your account
            </h2>
            <div className=" text-red-400  mt-2 font-medium">{message}</div>

            <input
              type="text"
              name="first_name"
              placeholder="First name"
              onChange={handleChange}
              className="border-2 rounded-md px-2 border-gray-300 mt-5 py-1 w-full"
            />

            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              onChange={handleChange}
              className="border-2 rounded-md px-2 border-gray-300 mt-5 py-1 w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="border-2 rounded-md px-2 border-gray-300 mt-5 py-1 w-full"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="border-2 rounded-md px-2 border-gray-300 mt-5 py-1 w-full"
            />

            <div className="flex justify-center mb-5">
              <button
                type="button"
                className="px-18 rounded-md py-2 text-white font-semibold bg-blue mt-5"
                onClick={handleSubmit}
              >
                Create account
              </button>
            </div>

            <div className="border-b-2 border-b-gray-400 mb-5"></div>

            <div className="flex gap-4 mb-5">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <FcGoogle size={28} />
              </div>

              <div className="bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
                <AppleIcon sx={{ fontSize: 28 }} />
              </div>

              <div className="bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
                <FacebookIcon sx={{ fontSize: 28 }} color="primary" />
              </div>

              <div className="bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
                <LinkedInIcon sx={{ fontSize: 28 }} color="primary" />
              </div>
            </div>

            <p className="font-semibold">
              Have an account?
              <NavLink to="/login" className="text-blue">
                Login
              </NavLink>
            </p>
          </form>
        </section>
      </div>

      <div
        className="bg-contain bg-no-repeat h-screen w-1/2 bg-center bg-[#F2F2F2]"
        style={{ backgroundImage: `url('${loginImg}')` }}
      ></div>
    </section>
  );
}

export default Register;
