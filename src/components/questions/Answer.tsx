import React from "react";
import { Question } from "../../types/main_page";

interface Props {
  question: Question;
}

const Answer: React.FC<Props> = ({ question }) => {
  const arrOfString = question.answer.split("$");
  return (
    <div>
      {arrOfString.map((item, i) => (
        <p key={i} className={`${i + 1 !== arrOfString.length && "pb-5"}`}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default Answer;
