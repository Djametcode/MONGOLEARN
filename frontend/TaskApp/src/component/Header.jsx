import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "./frawer";

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
    await navigate("/landing");
  };
  return (
    // <div className=" sticky flex justify-between top-0 font-quick bg-blue-600 text-white/40 p-3 text-center z-10">
    //   <h1 className=" p-2 text-xl">Posting Aja Dulu</h1>
    //   <div
    //     className=" bg-slate-300/30 p-1 rounded-2xl flex gap-2 justify-center"
    //     onClick={toggleLogOut}
    //     style={{ cursor: cursor }}
    //   >
    //     <div
    //       style={{ display: display }}
    //       className=" w-10 h-10 bg-user bg-cover bg-slate-100 text-black rounded-full"
    //     ></div>
    //     <div className=" flex flex-col justify-center">
    //       <p className=" text-slate-200 text-sm rounded-lg ">{user}</p>
    //     </div>
    //     {logout && (
    //       <div className=" text-black flex flex-col justify-center text-sm">
    //         <button
    //           onClick={logouthandle}
    //           className=" bg-slate-300 rounded-lg p-1"
    //         >
    //           Log Out
    //         </button>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Posting Aja Dulu</a>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="./src/images/user.png" alt="" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">{user}</a>
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
