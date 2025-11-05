import React from "react";
import { Form } from "./components/form";
import { AppContextWrapper } from "./context/app-context/app-context";
import { Card } from "./components/card";

function App() {
  const { data } = React.useContext(AppContextWrapper);
  return (
    <div className="container">
      <Form />
      {data?.userList?.map((item) => (
        <Card key={item.id} username={item.username} id={item.id} />
      ))}
    </div>
  );
}

export default App;
