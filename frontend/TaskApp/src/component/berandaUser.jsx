import { Outlet } from "react-router-dom";
import ForYouPage from "./fyp";
import Header from "./Header";
import Menu from "./menu";
import Story from "./story";

const BerandaUser = () => {
  return (
    <div>
      <div className=" sticky top-0 z-20">
        <Header />
      </div>
      <div className=" bg-slate-100 m-2 rounded-2xl">
        <Story />
      </div>
      <ForYouPage />
      <div className=" fixed bottom-0 w-full">
        <Menu />
      </div>
    </div>
  );
};

export default BerandaUser;
