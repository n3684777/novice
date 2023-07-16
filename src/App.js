import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const Listhandle = ({ name, age, id, fin, handler }) => {
  return (
    <div>
      <li
        style={{ color: fin ? "green" : "red" }}
        key={id}
        onClick={() => {
          handler(id);
        }}
      >
        123
      </li>
    </div>
  );
};
const App = () => {
  let [list, setList] = useState([
    { name: "joy", age: 10, id: uuidv4(), fin: false },
    { name: "dannis", age: 5, id: uuidv4(), fin: false },
  ]);

  let Btnhandler = (id) => {
    let newList = list.map((value) => {
      if (value.id === id) {
        console.log(`name : ${value.name} age : ${value.age}`);
        return { ...value, fin: !value.fin };
      } else {
        return list;
      }
    });
    setList(newList);
  };
  return (
    <div>
      <ul>
        {list.map((value) => {
          // console.log(value.key);
          return (
            <Listhandle
              id={value.id}
              name={value.name}
              age={value.age}
              fin={value.fin}
              handler={Btnhandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
