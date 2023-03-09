const Help = () => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
    >
      <div className="collapse-title text-l font-medium">
        Klik Disini Untuk Petunjuk
      </div>
      <div className="collapse-content">
        <p className=" text-base">
          Silahkan Klik register untuk daftar, kemudian Login menggunakan email
          dan password
        </p>
      </div>
    </div>
  );
};

export default Help;
