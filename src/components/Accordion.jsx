import React, { useState } from "react";
import { questions } from "./api";
import MyAccordion from "./MyAccordion";

function Accordion() {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main-div">
        <h1 className="text-3xl capitalize text-center tracking-wide">
          React Interview Questions
        </h1>
        {data.map(({ id, question, answer }) => {
          return <MyAccordion key={id} question={question} answer={answer} />;
        })}
      </section>
    </>
  );
}

export default Accordion;
