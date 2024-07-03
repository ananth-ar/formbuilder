import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormContext } from "../context/provider";
import { Button } from "antd";

const Home = () => {
  const { createdForms, setFormdata } = useContext(FormContext);
  const nav = useNavigate();

  const handleClick = (index) => {
    setFormdata(createdForms[index]);
    nav("./form");
  };

  return (
    <>
      <Link to="./build">BUILD FORM</Link>
      {createdForms.map((form, index) => (
        <ul key={index}>
          <Button type="primary" onClick={() => handleClick(index)}>
            form{index + 1}
          </Button>
        </ul>
      ))}
    </>
  );
};

export default Home;
