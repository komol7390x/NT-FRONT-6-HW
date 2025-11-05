import React from "react";
import { AppContextWrapper } from "../context/app-context/app-context";

export const Card = ({ username, id }) => {
  const { dispatch } = React.useContext(AppContextWrapper);
  const deleteItem = () => {
    dispatch({ type: "DELETE_USER", id });
  };
  return (
    <div className="border my-3 border-blue-400 p-5">
      <h2 className="text-4xl">{username}</h2>
      <button onClick={deleteItem} className="p-3 bg-red-400">
        delete
      </button>
    </div>
  );
};
