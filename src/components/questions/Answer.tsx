import React from "react";
import { Question } from "../../types/main_page";

interface Props {
  question: Question;
}

const Answer: React.FC<Props> = ({ question }) => {
  const arrOfString = question.answer.split("$");
  return (
    <div
      itemScope
      itemProp='acceptedAnswer'
      itemType='https://schema.org/Answer'
    >
      {arrOfString.map((item, i) => (
        <div
          key={i}
          itemProp='text'
          className={`${i + 1 !== arrOfString.length && "pb-5"}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Answer;
