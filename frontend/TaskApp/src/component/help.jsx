const Help = () => {
  return (
    <>
      <div className=" z-0 flex flex-col gap-2 p-3 pb-40 text-black">
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-slate-300 rounded-box"
        >
          <div className="collapse-title text-base font-medium">
            Apa Itu Posting Dulu?
          </div>
          <div className="collapse-content">
            <p className=" text-sm">
              Posting Aja Dulu adalah aplikasi social media, yang di buat secara
              fullstack oleh Djamet coder AKA Tofik Hidayat (saya sendiri)
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-slate-300 rounded-box"
        >
          <div className="collapse-title text-base font-medium">
            Bagaimana Cara Daftar user?
          </div>
          <div className="collapse-content">
            <p className=" text-sm">
              Silahkan Klik register untuk daftar, kemudian Login menggunakan
              email dan password yang sudah anda daftarkan tadi. (pakai email
              asal gpp yang penting belakang @gmail.com)
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-slate-300 rounded-box"
        >
          <div className="collapse-title text-base font-medium">
            Apakah data saya aman?
          </div>
          <div className="collapse-content">
            <p className=" text-sm">
              Tentu saja tidak ada data yang aman, tapi tenang setaip user pakai
              JWT kok
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-slate-300 rounded-box"
        >
          <div className="collapse-title text-base font-medium">
            Apakah saya bisa menghapus akun dan data saya?
          </div>
          <div className="collapse-content">
            <p className=" text-sm">
              Bisa, Silahkan ke profil dan klik hapus akun :)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
