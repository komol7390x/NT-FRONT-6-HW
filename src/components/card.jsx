import React from "react"

export const Card = ({ title, id, setData }) => {
    const [showInput, setShowInput] = React.useState(false)
    const [input, setInput] = React.useState(title)
    const [count, setCount] = React.useState(0)

    // DELETE
    const deleteItem = () => {
        setData((pState) => {
            const newArr = pState.filter((item) => item.id != id);
            return newArr
        })
    }

    // UPDATE
    const editItem = () => {
        if (showInput) {
            setData((pState) => {
                return pState.map((item) => item.id == id ? { id, title: input } : item)
            })
        }
        setShowInput(!showInput)
    }

    return (
        <div className="border border-green-400 p-5 my-2.5 rounded-4xl">
            {!showInput ? (<div>
                <h2 className="text-shadow-violet-400 text-3xl mb-2.5">{title}</h2>
            </div>) : (<div className="mb-2.5">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="text-red-400 w-full text-3xl"
                    type="text" />
            </div>)}

            <div>
                <button className="bg-green-400 p-2.5 cursor-pointer rounded-full mr-2.5"
                    onClick={() => setCount(count + 1)}>+
                </button>
                <div className="gap-3 flex mt-2">
                    <button onClick={deleteItem}
                        className="bg-blue-400 p-2.5 cursor-pointer rounded-full">Delete</button>
                    <button onClick={editItem} className="bg-yellow-400 p-2.5 cursor-pointer rounded-full">{showInput ? 'Save' : 'Edit'}</button>

                </div>
            </div>
        </div>
    )
}