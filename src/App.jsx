import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Input from "./input";

const App = () => {
  const [n1, setN1] = useState(0);
  // const [n2, setN2] = useState(0);
  const [result, setresult] = useState();
  console.log("this is value of n1 ");

  console.log(n1);

  // console.log("this is value of n2 ");

  // console.log(n2);
  // console.log(result);

  return (
    <div className="App">
      <Input
        className="input-somthing"
        label={""}
        value={n1}
        setValue={setN1}
      />
      <Input label={""} value={n2} setValue={setN2} />
      <div className="tableButtons">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button
            action={"+"}
            onClick={() => setresult(Number(n1) + Number(n2))}
          />

          <Button action={"-"} onClick={() => setresult(n1 - n2)} />
          <Button action={"x"} onClick={() => setresult(n1 * n2)} />
        </div>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>0</button>
        <button data-action="decimal">.</button>
        <button data-action="clear">AC</button>
        <button class="key--equal" data-action="calculate">
          =
        </button>
        {result}
      </div>
    </div>
  );
};

export default App;
