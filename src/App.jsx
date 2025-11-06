import React from "react"
import { AppContext } from "./context/app-context/app-context"
import { Form } from "./components/form";
import { Card } from "./components/card";

function App() {
  const { data } = React.useContext(AppContext);

  return (
    <div className="container">
      <Form />
      {data?.userList?.map((item) => (
        <Card username={item.username} key={item.id} id={item.id} />
      ))}
    </div>
  )
}

export default App
