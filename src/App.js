import Header from "./Header.js";
// import './App.css';

function Card({ bName,bDesc }) {
  let styles = {
    border: "1px solid black",
    padding: "10px",
    width: "max-content",
    margin: "auto 10px"
  };

  return (
    <div className="Card" style={styles}>
      <h1>{bName}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Card bName={"This is Name"} />
    </div>
  );
}

export default App;
