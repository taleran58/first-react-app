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

  return (
    <div>
      <Alert> Miao</Alert>
      <button onClick={handleButtonClick}>Print</button>
      <ListGroup
        items={items}
        header="Dogs"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
