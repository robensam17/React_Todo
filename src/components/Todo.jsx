import React from "react";

function Todo(props) {
  const [line, setLine] = React.useState(false);

  function setLineThrough() {
    setLine(prevValue => {
      return !prevValue;
    });
  }

  return (
    <div onClick={setLineThrough}>
      <li style={{ textDecoration: line ? "line-through" : null }}>
        {" "}
        {props.text}
        <input
          onClick={() => {
            props.onChecked(props.id);
          }}
          style={{ position: "absolute", right: 0 }}
          type="checkbox"
        />
      </li>
    </div>
  );
}

export default Todo;
