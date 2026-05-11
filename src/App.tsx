import Person from "./Person";

function App() {
  return (
    <div>
      <Person name={"Div"} age={23} isMarried={false} />
      <hr />
      <Person name={"Steve"} age={33} />
    </div>
  );
}

export default App;
