const ProfileComponent = () => {
  const username = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  return (
    <div className=" font-quick">
      <h1 className=" p-3 bg-slate-400/40 m-2 rounded-lg">Profil Saya :</h1>
      <div className=" bg-slate-400/40 p-3 pb-28 m-2 rounded-lg flex flex-col gap-2">
        <p className=" bg-slate-500 p-2 rounded-lg">Username :{username}</p>
        <p className=" bg-slate-500 p-2 rounded-lg">Email: {email}</p>
      </div>
    </div>
  );
};

export default ProfileComponent;
