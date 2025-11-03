import React from "react"

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <div className="container">
        <h1 className="">Count {count}</h1>

        <div className="flex gap-3 mt-5">
          <button onClick={count >= 100 ? (() => setCount(count + 100)) : count < 10 ? () => setCount(count + 1) : () => setCount(count + 10)} disabled={count >= 1000} className="p-3 border-2 rounded-2xl bg-green-400">Increase</button>
          <button onClick={count > 100 ? (() => setCount(count - 100)) : count < 10 ? () => setCount(count - 1) : () => setCount(count - 10)} disabled={count <= 0} className="p-3 border-2 rounded-2xl bg-red-400">Dicrease</button>
        </div>
      </div>
    </>
  )
}

export default App
