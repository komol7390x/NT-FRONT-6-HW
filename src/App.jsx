import React from "react"
import { Form } from './components/form'
import { Card } from "./components/card"

function App() {
  const [data, setData] = React.useState([])

  return (
    <div className="container">
      <h1>Komol</h1>
      <Form setData={setData} />
      {data.map((item) => (
        <Card
          setData={setData}
          key={item.id}
          title={item.title}
          id={item.id}
        />
      ))}
    </div>
  )
}

export default App
