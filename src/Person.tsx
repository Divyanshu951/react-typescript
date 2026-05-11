import { useState } from "react";

type Props = {
  name: string;
  age: number;
  isMarried: boolean;
};

function Person({ name, age, isMarried }: Props) {
  const [isVisible, setIsVisible] = useState<boolean | null>(true);

  return (
    <div className="p-4 pt-2">
      <button
        className="rounded-md border-2 px-6"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        Toggle
      </button>

      {isVisible && (
        <>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Is Married: {isMarried ? "Yes" : "No"}</p>
        </>
      )}
    </div>
  );
}

export default Person;
