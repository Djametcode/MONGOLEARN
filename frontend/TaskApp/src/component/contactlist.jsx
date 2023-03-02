import { useEffect, useState } from "react";
import axios from "axios";

const ContactMap = ({ data }) => {
  const result = data.map((item) => (
    <li className=" bg-slate-50 p-4 rounded-lg h-60">
      <p>Nama : {item.username}</p>
      <p>Alamat: {item.address}</p>
    </li>
  ));
  return <ul className=" flex flex-col gap-3 text-lg">{result}</ul>;
};

const List = () => {
  const url = "http://localhost:3000/api/v3/user";

  //state
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await axios.get(url);
        const item = response.data;
        const { data } = item;
        console.log(data);
        setContact(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllData();
  }, []);
  return (
    <div>
      <ContactMap data={contact} />
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
