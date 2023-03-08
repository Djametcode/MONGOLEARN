import { useContext, useRef, useState } from "react";
import axios from "axios";
import { ItemContext } from "../App";

const UpdateMenu = ({ id }) => {
  const { getAllData } = useContext(ItemContext);
  const [nama, setnama] = useState("");
  const [alamat, setalamat] = useState("");
  const [secretmsg, setSecret] = useState("");

  const namaref = useRef();
  const alamatref = useRef();
  const secretref = useRef();

  const data = {
    username: nama,
    address: alamat,
    secret: secretmsg,
  };
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const updatedata = async () => {
    try {
      await axios.patch(
        `https://grumpy-worm-stockings.cyclic.app/api/v3/user/${id}`,
        data,
        config
      );
      await getAllData();
      event.preventDefault();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = () => {
    setnama(namaref.current.value);
    setalamat(alamatref.current.value);
    setSecret(secretref.current.value);
  };
  return (
    <div className=" p-3 shadow-lg">
      <form className=" pt-3 rounded-lg p-2 flex flex-col gap-1" action="#">
        <input
          className=" bg-slate-100 w-full p-1 rounded-lg focus:outline-none"
          type="text"
          placeholder="Nama.."
          ref={namaref}
          onChange={handleChange}
        />
        <input
          className=" bg-slate-100 w-full p-1 rounded-lg focus:outline-none"
          type="text"
          placeholder="Alamat..."
          ref={alamatref}
          onChange={handleChange}
        />
        <input
          className=" bg-slate-100 w-full p-1 rounded-lg focus:outline-none"
          type="text"
          placeholder="Secret Message terbaru.. !"
          onChange={handleChange}
          ref={secretref}
        />
        <div className=" flex justify-center">
          <input
            onClick={updatedata}
            type="submit"
            value="update"
            className=" bg-slate-100 text-slate-400 p-1 rounded-lg"
          />
        </div>
      </form>
    </div>
  );
};

const DeleteButton = ({ id, data, setContact }) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const deleteContact = async () => {
    await axios.delete(
      `https://grumpy-worm-stockings.cyclic.app/api/v3/user/${id}`,
      config
    );
    const index = await data.filter((item) => item._id !== id);

    setContact(index);
  };
  return (
    <button
      onClick={deleteContact}
      className=" bg-slate-300/50 p-2 rounded-lg text-sm"
    >
      Hapus
    </button>
  );
};

const SecretMessage = ({ text }) => {
  return (
    <div className=" bg-slate-400/30 rounded-lg text-sm">
      <p className=" p-2 pb-44 mt-2">
        <q>{text}</q>
      </p>
    </div>
  );
};

const ToggleSecretMessage = ({ data }) => {
  const [secret, toggleItem] = useState(false);
  const checkRef = useRef();
  const toggleSecretMsg = () => {
    if (checkRef.current.checked === false) {
      toggleItem(true);
    }
  };
  return (
    <div className=" text-center p-3">
      <input
        className=" hidden"
        ref={checkRef}
        type="checkbox"
        id="secretmsg"
      />
      <label
        className=" text-sm underline p-2 text-black/50 rounded-lg"
        onClick={toggleSecretMsg}
        htmlFor="secretmsg"
      >
        Klik untuk tampilkan Pesan Rahasia
      </label>
      {secret && <SecretMessage text={data} />}
    </div>
  );
};

const ContactMap = ({ data, setContact }) => {
  const checkRef = useRef();
  const [updateMenu, setUpdate] = useState(false);
  const toggleMenu = () => {
    if (checkRef.current.checked === false) {
      setUpdate(true);
    } else {
      setUpdate(false);
    }
  };
  const result = data.map((item) => (
    <div
      key={item._id}
      className=" bg-slate-50 p-5 rounded-lg h-full relative z-0 text-base"
    >
      <div className=" bg-slate-200/50 p-1 rounded-lg relative z-20">
        <p>Nama : {item.username}</p>
        <p>Alamat: {item.address}</p>
        <p>Di buat oleh user: {item.createdBy}</p>
        <p>Tanggal di buat: {item.date}</p>
      </div>

      <ToggleSecretMessage data={item.secret} />
      <div className=" flex justify-around gap-3">
        <DeleteButton id={item._id} data={data} setContact={setContact} />
        <input
          className=" hidden"
          ref={checkRef}
          type="checkbox"
          id="updatemenu"
        />
        <label
          className=" text-sm bg-slate-300/50 p-2 rounded-lg"
          onClick={toggleMenu}
          htmlFor="updatemenu"
        >
          Update
        </label>
      </div>
      {updateMenu && <UpdateMenu id={item._id} />}
    </div>
  ));
  return <div className=" flex flex-col gap-3 text-lg">{result}</div>;
};

const List = () => {
  const { data, setdata } = useContext(ItemContext);
  return (
    <div>
      <ContactMap data={data} setContact={setdata} />
    </div>
  );
};

const ContactList = () => {
  return (
    <div className=" font-quick m-3 bg-slate-600/10 rounded-lg p-3 text-2xl">
      <h1
        className=" text-center p-3
      "
      >
        Secret Message List From database
      </h1>
      <div>
        <List />
      </div>
    </div>
  );
};

export default ContactList;
