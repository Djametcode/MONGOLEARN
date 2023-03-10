import Header from "./Header";
import Menu from "./menu";
import ProfileComponent from "./profilecomponent";

const Profile = () => {
  return (
    <div>
      <div className=" sticky top-0">
        <Header />
      </div>

      <ProfileComponent />
      <div className=" fixed bottom-0 w-full">
        <Menu />
      </div>
    </div>
  );
};
export default Profile;
