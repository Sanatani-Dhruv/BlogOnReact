import Header from "./Header.js";
import { toggle } from "./util.js";
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
  const [showBlogUi, setBlogUi] = useState(false);
  return (
    <>
      <Header />
      <div class="tasks p-4 m-auto w-max">
        <button class="bg-blue-400 p-2 pt-2 pb-2 rounded" onClick={() => toggle(setBlogUi,showBlogUi)}>Add Blog</button>
      </div>
      <div class="p-4 m-auto w-max">
        { (!showBlogUi) && <Card bName={"Showing Card"} />  }
      </div>
    </>
  );
}

export default App;
