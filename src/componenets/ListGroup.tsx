import { useState } from "react";

interface Props {
  items: string[];
  header: string;
}

function ListGroup() {
  const items = [
    "German Sheperd",
    "Colie",
    "Golden Retriever",
    "Bulldog",
    "Pug",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Dogs</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
