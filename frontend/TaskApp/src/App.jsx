import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import ContactList from "./component/contactlist";
import Header from "./component/Header";
import Input from "./component/Input";
import Landing from "./component/landing";
import Menu from "./component/menu";

export const ItemContext = createContext(null);

const ContactApp = () => {
  const [data, setdata] = useState([]);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const getAllData = async () => {
    const url = "https://grumpy-worm-stockings.cyclic.app/api/v3/user";
    try {
      const response = await axios.get(url, config);
      const item = response.data;
      const { data } = item;
      setdata(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div>
      <ItemContext.Provider value={{ data, setdata, getAllData }}>
        <Header />
        <Menu />
        <Input />
        <ContactList />
      </ItemContext.Provider>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ContactApp />
    </div>
  );
};

export default App;
