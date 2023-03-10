import { Outlet } from "react-router-dom";
import ForYouPage from "./fyp";
import Header from "./Header";
import Menu from "./menu";

const BerandaUser = () => {
  return (
    <div>
      <div className=" sticky top-0 z-20">
        <Header />
      </div>
      <ForYouPage />
      <div className=" fixed bottom-0 w-full">
        <Menu />
      </div>
    </div>
  );
};

export default BerandaUser;
