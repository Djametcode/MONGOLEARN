import { useEffect, useRef, useState } from "react";
import axios from "axios";

const DeleteButton = ({ id, data, setContact }) => {
  const deleteContact = async () => {
    await axios.delete(
      `https://grumpy-worm-stockings.cyclic.app/api/v3/user/${id}`
    );
    const index = await data.filter((item) => item._id !== id);

    setContact(index);
  };
  return (
    <button
      onClick={deleteContact}
      className=" bg-slate-300/50 p-2 rounded-lg absolute bottom-2 left-2"
    >
      Hapus Kontak
    </button>
  );
};

const SecretMessage = ({ data }) => {
  console.log(data);
  return (
    <div className=" bg-slate-400/60 rounded-lg">
      <p className=" p-2 pb-44 mb-11 mt-2">{data}</p>
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
    <div className=" text-center">
      <input
        className=" hidden"
        ref={checkRef}
        type="checkbox"
        id="secretmsg"
      />
      <label
        className=" bg-slate-400/40 text-sm underline p-2 text-black/50 rounded-lg"
        onClick={toggleSecretMsg}
        htmlFor="secretmsg"
      >
        Klik untuk tampilkan Pesan Rahasia
      </label>
      {secret && <SecretMessage data={data} />}
    </div>
  );
};

const ContactMap = ({ data, setContact }) => {
  const result = data.map((item) => (
    <li
      key={item._id}
      className=" bg-slate-50 p-4 rounded-lg h-full relative z-0 pb-16"
    >
      <p>Nama : {item.username}</p>
      <p>Alamat: {item.address}</p>
      <p>Tanggal di buat: {item.date}</p>
      <ToggleSecretMessage data={item.secretMessage} />
      <DeleteButton id={item._id} data={data} setContact={setContact} />
    </li>
  ));
  return <ul className=" flex flex-col gap-3 text-lg">{result}</ul>;
};

const List = () => {
  const [contact, setContact] = useState([]);
  const getAllData = async () => {
    const url = "https://grumpy-worm-stockings.cyclic.app/api/v3/user";
    try {
      const response = await axios.get(url);
      const item = response.data;
      const { data } = item;
      setContact(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div>
      <ContactMap data={contact} setContact={setContact} />
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
        Contact List From database
      </h1>
      <div>
        <List />
      </div>
    </div>
  );
};

export default ContactList;
