import { useState } from "react";
import type { User } from "./UserContextProvider";

function Person({ name, age, isMarried }: User) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [disc, setDisc] = useState<number>(0);

  // To get target values
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDisc(Number(e.target.value));
  }

  // To get form values
  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <button
        className="rounded-md border-2 px-6"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        Toggle
      </button>
      {isVisible && (
        <>
          <form onSubmit={handleSubmit} className="p-4 pt-2">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Is Married: {isMarried ? "Yes" : "No"}</p>

            <p>{disc}</p>
            <input
              className="border-2 px-2 py-1"
              type="number"
              value={disc}
              onChange={handleChange}
            />
          </form>
        </>
      )}
    </>
  );
}

export default Person;
