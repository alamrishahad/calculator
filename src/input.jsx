// import { useState } from "react";

const Input = ({ label, value, setValue }) => {
  // const [value, setValue] = useState(0);
  //arrow function defintion

  return (
    <div>
      <label>
        {label}
        <input
          type={"number"}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </label>
    </div>
  );
};

export default Input;
