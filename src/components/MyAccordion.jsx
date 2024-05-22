import React from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

function MyAccordion({ id, question, answer, isActive, setActiveId }) {
  const handleShowAnswer = () => {
    if (isActive) {
      setActiveId(null); // Close the active question
    } else {
      setActiveId(id); // Open the clicked question
    }
  };

  return (
    <>
      <div className="main-heading">
        <p onClick={handleShowAnswer}>
          {isActive ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
        </p>
        <h1 className="text-lg capitalize text-center tracking-wide">
          {question}
        </h1>
      </div>
      {isActive && <p className="answers">{answer}</p>}
    </>
  );
}

export default MyAccordion;
