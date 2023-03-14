import { Link } from "react-router-dom";
import Footer from "./footer";
import Help from "./help";
import Register from "./regist";

const RegistOnly = () => {
  return (
    <div className=" bg-wave font-quick sm:hidden">
      <h1 className=" font-comic sticky z-10 top-0 bg-wave bg-cover text-white p-6 text-3xl text-center">
        Posting Aja Dulu
      </h1>
      <div className=" flex flex-col p-2">
        <div className=" flex justify-start pl-4 underline">
          <Link to="/"> klik untuk kembali ke Login</Link>
        </div>
        <Register />
      </div>
      <div className=" p-2 pb-20">
        <Help />
      </div>

      <div className=" fixed bottom-0 w-full flex text-white text-sm">
        <Footer />
      </div>
    </div>
  );
};

export default RegistOnly;
