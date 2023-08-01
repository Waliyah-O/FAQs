import { useState } from "react";

const DoOver = () => {
  const dummyData = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae optio? Vero illo expedita numquam tempore, harum non corporis consectetur",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae optio? Vero illo expedita numquam tempore, harum non corporis consectetur",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae optio? Vero illo expedita numquam tempore, harum non corporis consectetur",
    },
  ];

  const [isOpen, setIsOpen] = useState();

  function openAnswers(index) {
    setIsOpen(index === isOpen ? false : index);
  }

  return (
    <div>
      {dummyData.map((item, index) => (
        <div key={index}>
          <h2 onClick={() => openAnswers(index)}>{item.question}</h2>
          {isOpen === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default DoOver;
