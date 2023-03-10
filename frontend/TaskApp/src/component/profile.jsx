import Header from "./Header";
import Menu from "./menu";
import ProfileComponent from "./profilecomponent";

const Profile = () => {
  return (
    <div>
      <Header />
      <ProfileComponent />
      <div className=" fixed bottom-0 w-full">
        <Menu />
      </div>
    </div>
  );
};
export default Profile;
