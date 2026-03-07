import logo from "./../assets/img/logo.png";

function Navbar() {
  return (
    <header className="flex justify-around items-center h-17 font-medium">
      <div className="">
        <img className="bg-blue h-13 rounded-lg" src={logo} alt="" />
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
        <button className="bg-blue px-6 py-2 rounded-lg">Login</button>
        <button className="bg-white px-6 py-2 rounded-lg text-black border-blue border-2">
          sign In
        </button>
      </div>
    </header>
  );
}

export default Navbar;
