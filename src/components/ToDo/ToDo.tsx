import { FormEvent, useState } from "react";
import "./ToDo.css";

export default function ToDo() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(["item 1"]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();

    setItems([...items, item]);
    setItem("");

    console.log("Added item");
  }

  function removeItem(index: number) {
    let newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);

    console.log("Removing item");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <ul className="list">
        {items.map((item, index) => {
          return (
            <li key={index} className="item">
              {item}
              <button type="button" onClick={() => removeItem(index)}>
                (-)
              </button>
            </li>
          );
        })}
      </ul>
      <div className="input-container">
        <input
          className="todo-input"
          onChange={(event) => {
            setItem(event.target.value);
          }}
          value={item}
          type="text"
          placeholder="Add Todo..."
        />
      </div>
    </form>
  );
}
