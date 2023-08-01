import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quia itaque magnam assumenda odio dolorum!",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quia itaque magnam assumenda odio dolorum!",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quia itaque magnam assumenda odio dolorum!",
    },
    // Add more FAQ items here
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <div>
        {faqData.map((item, index) => (
          <div key={index}>
            <h3 onClick={() => handleQuestionClick(index)}>{item.question}</h3>
            {expandedIndex === index && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
