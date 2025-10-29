import { nanoid } from "nanoid";
import React from "react";

export const Form = ({ setData }) => {
    const [input, setInput] = React.useState('');

    const submit = (emiter) => {
        emiter.preventDefault();
        setData((pState) => {
            return [...pState, { title: input, id: nanoid() }]
        });
        setInput('');
    }

    return (
        <form onSubmit={submit} >
            <div className="flex gap-3">
                <input
                    type="text"
                    value={input}
                    onChange={(emiter) => setInput(emiter.target.value)}
                    className="p-2.5 cursor-pointer bg-green-300 rounded-2xl"
                />
                <button className="cursor-pointer p-2.5 bg-blue-300 rounded-2xl">send</button>

            </div>
        </form>
    )

}