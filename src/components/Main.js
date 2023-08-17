import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setInput } from "../redux/markdownSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { marked } from "marked";

function Main() {
  const items = useSelector((state) => state.text.items);
  const status = useSelector((state) => state.text.helpStatus);
  const help = useSelector((state) => state.text.help);

  console.log(status);

  const dispatch = useDispatch();
  //   const [text, setText] = useState("");

  const handleInput = (e) => {
    // setText(e.target.value);
    dispatch(setInput(e.target.value));
    console.log(e.target.value);
  };

  const options = { mangle: false, headerIds: false };

  const createMarkUp = (text) => {
    return { __html: marked(text, options) };
  };

  return (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "40px",
      }}
    >
      <div className="input" style={{ padding: 0, margin: "0" }}>
        <textarea
          readOnly={status}
          value={status ? help : items}
          onChange={handleInput}
          placeholder="this is user input"
          style={{
            height: "50vh",
            width: "40vw",
            padding: "0px",
            resize: "none",
            border: "1px solid black",

            background: "rgb(192, 184, 171)",
            boxShadow: "4px 4px",
          }}
        />
      </div>
      <div className="output" style={{}}>
        <div
          style={{
            height: "50vh",
            width: "40vw",
            border: "1px solid black",
            wordWrap: "break-word",
            fontFamily: "monospace",
            whiteSpace: "nowrap",
            overflow: "auto",
            paddingTop: "",
            boxShadow: "4px 4px",
            background: "rgb(192, 184, 171)",
          }}
          dangerouslySetInnerHTML={createMarkUp(
            status ? help : items.toString()
          )}
        ></div>
      </div>
    </div>
  );
}

export default Main;
