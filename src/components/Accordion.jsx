import React, { useState } from "react";
import { questions } from "./api";
import MyAccordion from "./MyAccordion";

function Accordion() {
  //   const [data, setData] = useState(questions);
  const [activeId, setActiveId] = useState(1);
  return (
    <>
      <section className="main-div">
        <h1 className="text-3xl capitalize text-center tracking-wide">
          React Interview Questions
        </h1>
        {questions.map((elem) => {
          return (
            <MyAccordion
              key={elem.id}
              {...elem}
              isActive={elem.id === activeId}
              setActiveId={setActiveId}
            />
          );
        })}
      </section>
    </>
  );
}

export default Accordion;
