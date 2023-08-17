import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { helper } from "../redux/markdownSlice";
import { QuestionCircleOutlined } from "@ant-design/icons";

function Header() {
  const dispatch = useDispatch();

  const handleHelp = () => {
    dispatch(helper());
  };

  return (
    <>
      {" "}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "Lucida Console , monospace",
        }}
      >
        Markdown Previewer
      </h2>
      <hr></hr>
      <QuestionCircleOutlined
        className="markdown"
        onClick={handleHelp}
        style={{
          width: "2vw",
          fontSize: "30px",
          marginLeft: "95%",
          // padding: "2%",
          position: "absolute",
          top: "4%",
        }}
      >
        {" "}
        calıs
      </QuestionCircleOutlined>
    </>
  );
}

export default Header;
