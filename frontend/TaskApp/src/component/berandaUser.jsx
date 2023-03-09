import { Outlet } from "react-router-dom";
import ForYouPage from "./fyp";
import Header from "./Header";
import Menu from "./menu";

const BerandaUser = () => {
  return (
    <div>
      <div className=" sticky top-0">
        <Header />
        <Menu />
      </div>

      <ForYouPage />
    </div>
  );
};

export default BerandaUser;
