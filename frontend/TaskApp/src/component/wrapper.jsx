import { useState } from "react";
import Footer from "./footer";
import Help from "./help";
import Login from "./login";
import UserList from "./userlist";
import Hamburger from "./hamburger";
import HamburgerTwo from "./hamburger2";
import SideBar from "./sidebar";

const Wrapper = () => {
  const icons = [
    {
      icon: <Hamburger />,
    },
    {
      icon: <HamburgerTwo />,
    },
  ];

  const [index, setIndex] = useState(0);
  const [Side, toggleSideBar] = useState(false);

  const next = () => {
    const indexPosition = index === 0;
    const newIndex = indexPosition ? icons.length - 1 : 0;
    setIndex(newIndex);
    if (indexPosition) {
      toggleSideBar(true);
    } else {
      toggleSideBar(false);
    }
  };

  return (
    <>
      <div className=" bg-slate-200 font-quick sm:hidden">
        <div className=" flex sticky top-0 justify-end h-16 pl-4 pr-4 bg-slate-400">
          <div className=" flex flex-col justify-center">
            <h1 className=" font-quick bg-cover text-black text-3xl text-center">
              Posting Aja Dulu
            </h1>
          </div>
        </div>
        <div className="">
          <Login />
        </div>
        <div className=" m-3">
          <UserList />
        </div>
        <div className=" p-2">
          <Help />
        </div>

        <div className=" z-0 fixed bottom-0 w-full flex text-white text-sm">
          <Footer />
        </div>
      </div>
      <div className=" absolute top-4 left-3 z-30">
        <div className=" cursor-pointer relative" onClick={next}>
          {icons[index].icon}
        </div>
      </div>
      <div className=" fixed top-0 left-0">{Side && <SideBar />}</div>
    </>
  );
};

export default Wrapper;
