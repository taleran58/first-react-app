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

  return (
    <div>
      <ListGroup
        items={items}
        header="Dogs"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
