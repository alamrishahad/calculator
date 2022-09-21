// import { useState } from "react";
// import "./App.css";
// import Button from "./Button";
// import Input from "./input";

// const App = () => {
//   const [n1, setN1] = useState(0);
//   const [n2, setN2] = useState(0);
//   const [result, setresult] = useState();
//   console.log("this is value of n1 ");

//   console.log(n1);

//   // console.log("this is value of n2 ");

//   // console.log(n2);
//   // console.log(result);

//   return (
//     <div className="App">
//       <Input
//         className="input-somthing"
//         label={""}
//         value={n1}
//         setValue={setN1}
//       />
//       <Input label={""} value={n2} setValue={setN2} />
//       <div className="tableButtons">
//         <div style={{ display: "flex", flexDirection: "row" }}>
//           <Button
//             action={"+"}
//             onClick={() => setresult(Number(n1) + Number(n2))}
//           />

//           <Button action={"-"} onClick={() => setresult(n1 - n2)} />
//           <Button action={"x"} onClick={() => setresult(n1 * n2)} />
//         </div>

//         <Button>7</Button>
//         <Button>8</Button>
//         <Button>9</Button>
//         <Button>4</Button>
//         <Button>5</Button>
//         <button>6</button>
//         <button>1</button>
//         <button>2</button>
//         <button>3</button>
//         <button>0</button>
//         <button data-action="decimal">.</button>
//         <button data-action="clear">AC</button>
//         <button class="key--equal" data-action="calculate">
//           =
//         </button>
//         {result}
//       </div>
//     </div>
//   );
// };

// export default App;
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import "./App.css";
import "./Wrapper.css";
import "./Screen.css";
import "./Button.css";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        <Button
          className=""
          value="0"
          onClick={() => {
            console.log("Button clicked!");
          }}
        />
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
