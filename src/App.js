import Header, {showBlogUi} from "./Header.js";
import React, { useState, useContext} from 'react';
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
  const [showBlogUi, setBlogUi] = useState(showBlogUi);

  return (
    <>
      <Header />
            <button class="bg-blue-400 p-2 pt-2 pb-2 rounded" onClick={() => {
              setBlogUi(true);
              console.log(showBlogUi);
            }}>Add Blog</button>
      { !(showBlogUi)? <Card bName={"Lorem Ipsum"} /> : "" }
      {console.log(showBlogUi)}
    </>
  );
}

export default App;
