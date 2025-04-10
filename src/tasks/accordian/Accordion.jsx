import React, { useState } from "react";
import "./Accordion.css";

function Accordion({ data }) {
  const [display, setDisplay] = useState([]);

  function handleOnClick(id) {
    if (display.includes(id)) {
      setDisplay(display.filter((itemId) => itemId !== id));
    } else {
      setDisplay([...display, id]);
    }
  }

  return (
    <div className="accordion-container">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div onClick={() => handleOnClick(item.id)}>{item.title}</div>
            {display.includes(item.id) && <div>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
