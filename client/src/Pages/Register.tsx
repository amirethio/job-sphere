import loginImg from "./../assets/img/login.png";
import logo from "./../assets/img/logo.png";
import { FcGoogle } from "react-icons/fc";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router";

function Register() {
  return (
    <section className="flex bg-white">
      <div className="w-1/2">
        <section className="bg-white w-6/10 h-screen m-auto max-h-150 rounded-2xl mt-16 p-20">
          <img src={logo} alt="" className="bg-blue w-30 rounded-md" />
          <form action="" className="">
            <h2 className="text-2xl font-semibold mt-3">Create your account</h2>
            <input
              type="text"
              name=""
              id=""
              placeholder="First name"
              className="border-2 rounded-md px-2 border-gray-300 mt-5 pr-10 py-1 w-full"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Last name"
              className="border-2 rounded-md px-2 border-gray-300 mt-5 pr-10 py-1 w-full"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="border-2 rounded-md px-2 border-gray-300 mt-5 pr-10 py-1 w-full"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="border-2 rounded-md px-2 border-gray-300 mt-5 pr-10 py-1 w-full"
            />{" "}
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="border-2 rounded-md px-2 border-gray-300 mt-5 pr-10 py-1 w-full"
            />
            <div className="flex justify-center mb-5">
              <button className="b-blue px-20 rounded-md py-2 text-white font-semibold bg-blue mt-5 ">
                Create account
              </button>
            </div>
            <div className="border-b-2 border-b-gray-400 mb-5 "></div>
            {/* social media */}
            <div className="flex gap-4 mb-5">
              <div className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition">
                <FcGoogle size={28} />
              </div>

              <div className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-center">
                <AppleIcon sx={{ fontSize: 28 }} />
              </div>

              <div className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-center">
                <FacebookIcon sx={{ fontSize: 28 }} color="primary" />
              </div>

              <div className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-center">
                <LinkedInIcon sx={{ fontSize: 28 }} color="primary" />
              </div>
            </div>
            <p className="font-semibold">
              Don't have an account?
              <NavLink to="login" className="text-blue">
                Login
              </NavLink>
            </p>
          </form>
        </section>
      </div>
      <div
        className="bg-contain bg-no-repeat  h-screen w-1/2 bg-center bg-[#F2F2F2]  "
        style={{ backgroundImage: `url('${loginImg}')` }}
      ></div>
    </section>
  );
}

export default Register;
