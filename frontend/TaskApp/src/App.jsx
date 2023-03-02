import React from "react";
import ContactList from "./component/contactlist";
import Input from "./component/Input";
import Landing from "./component/landing";

const ContactApp = () => {
  return (
    <div>
      <Landing />
      <Input />
      <ContactList />
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
