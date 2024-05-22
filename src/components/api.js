export const questions = [
  {
    "id": 1,
    "question": "What is JSX?",
    "answer": "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to XML or HTML. JSX is used in React to describe what the UI should look like. React elements can be created using JSX, which gets compiled to React.createElement calls under the hood."
  },
  {
    "id": 2,
    "question": "What are components in React?",
    "answer": "Components are the building blocks of a React application. They are reusable pieces of UI that can have their own state and props. Components can be either class components, which are ES6 classes that extend from React.Component, or functional components, which are simple JavaScript functions."
  },
  {
    "id": 3,
    "question": "What is state in React?",
    "answer": "State is a built-in object in React components that allows components to store and manage data internally. State is used to make components interactive and dynamic. When the state changes, React re-renders the component to reflect the new state. State can be modified using the setState method in class components or the useState hook in functional components."
  },
  {
    "id": 4,
    "question": "What are props in React?",
    "answer": "Props (short for properties) are read-only attributes that are passed from a parent component to a child component. They allow data to flow from parent to child and enable component reusability. Props are immutable and cannot be modified by the child component."
  },
  {
    "id": 5,
    "question": "What is the Virtual DOM in React?",
    "answer": "The Virtual DOM is a concept in React that involves keeping a lightweight in-memory representation of the actual DOM. React uses the Virtual DOM to optimize rendering by computing the difference between the current and previous Virtual DOM states (a process called reconciliation) and updating the actual DOM only where changes have occurred. This improves performance and efficiency."
  }
];
