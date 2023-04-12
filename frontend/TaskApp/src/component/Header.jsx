import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("name"));
  const [logout, setLogot] = useState(false);
  const [cursor, setCursor] = useState("pointer");
  const [display, setDisplay] = useState("block");

  // const toggleLogOut = () => {
  //   setLogot(true);
  //   setCursor("");
  //   setDisplay("none");
  // };
  const logouthandle = async () => {
    await localStorage.removeItem("token");
    await localStorage.removeItem("_id");
    await localStorage.removeItem("name");
    await navigate("/landing");
  };

  const [bg, setBg] = useState("#f8fafc");
  const changeBg = () => {
    const position = window.scrollY;
    if (position >= 20) {
      setBg("#e2e8f0");
    } else {
      setBg("#f8fafc");
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <div style={{ backgroundColor: `${bg}` }} class="navbar">
      <div class="flex-1 font-quick">
        <a class="btn btn-ghost normal-case text-xl text-black">
          Posting Aja Dulu
        </a>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-9 bg-slate-500 rounded-full flex flex-col justify-center">
              <div className=" bg-user bg-cover w-9 h-9"></div>
            </div>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact font-quick dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <Link to="/profile" class="justify-between">
                {user}
              </Link>
            </li>
            <li>
              <a onClick={logouthandle}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
