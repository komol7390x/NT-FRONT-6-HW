import React from "react";
import { AppContextWrapper } from "../context/app-context/app-context";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

export const Form = () => {
  const { handleSubmit, reset, register } = useForm();
  const { dispatch } = React.useContext(AppContextWrapper);

  const submit = (data) => {
    dispatch({ type: "CREATE_USER", value: { ...data, id: nanoid() } });
    reset();
  };
  return (
    <form className="flex" onSubmit={handleSubmit(submit)}>
      <input className="bg-amber-300" {...register("username")} type="text" />
      <button className="p-3.5 bg-blue-300" type="submit">
        send
      </button>
    </form>
  );
};
