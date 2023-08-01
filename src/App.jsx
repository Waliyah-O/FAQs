import "./App.css";
import DoOver from "./components/Answers";
import List from "./components/FAQList";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return <List />;
  }

  function openAnswer() {
    setIsOpen(true);
  }

  return (
    <>
      <DoOver />
    </>
  );
}

export default App;
