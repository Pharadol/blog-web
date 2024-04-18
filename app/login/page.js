"use client";

import { useFormState } from "react-dom";
import { login } from "./action";

function page() {
  const initState = {
    message: null,
  };
  const [state, formAction] = useFormState(login, initState);
  return (
    <>
      <form
        action={formAction}
        className="flex flex-col max-w-[600px] mx-auto my-20 bg-white px-4 py-6 rounded-lg shadow-lg "
      >
        <h1 className="mx-auto text-xl mb-4">Login</h1>
        <div className="flex flex-col">
          Email{" "}
          <input
            name="email"
            className="rounded-sm mb-4 px-2 py-1 border-2"
            placeholder="member@member.com"
            required
          />
        </div>
        <div className="flex flex-col">
          Password{" "}
          <input
            name="password"
            type="password"
            className="rounded-sm mb-2 px-2 py-1 border-2"
            placeholder="member1234"
            required
          />
        </div>
        <span className="text-gray-700 mb-4">{state?.message}</span>
        <button className="bg-green-500 rounded-md py-2 text-white hover:bg-green-600 transition-all duration-200 ease-in">
          Login
        </button>
      </form>
    </>
  );
}

export default page;
