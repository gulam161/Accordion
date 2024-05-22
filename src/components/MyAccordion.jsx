import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

function MyAccordion({ question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="main-heading">
        <p onClick={() => setShow(!show)}>
          {show ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
        </p>
        <h1 className="text-lg capitalize text-center tracking-wide">
          {question}
        </h1>
      </div>
      {show && <p className="answers">{answer}</p>}
    </>
  );
}

export default MyAccordion;
