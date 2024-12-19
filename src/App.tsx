import { useState } from "react";
import Alert from "./componenets/Alert";
import ListGroup from "./componenets/ListGroup";

function App() {
  const items = [
    "German Sheperd",
    "Colie",
    "Golden Retriever",
    "Bulldog",
    "Pug",
  ];

  const handleSelectedItem = (item: string) => console.log(item);
  const handleButtonClick = () => console.log("Button was Clicked!!");

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible ? (
        <Alert onClose={() => setAlertVisibility(false)}>Miao</Alert>
      ) : null}
      <button onClick={() => setAlertVisibility(true)}>Print</button>
      <ListGroup
        items={items}
        header="Dogs"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
