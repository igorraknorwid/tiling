import React, { useState } from "react";
import { Question } from "../../types/main_page";

import arrow from "../../images/navbar/arrow.svg";

interface Props {
  questions: Question[];
}

const QuestionsList: React.FC<Props> = ({ questions }) => {
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(
    null
  );

  const toggleAnswer = (questionId: number) => {
    if (expandedQuestionId === questionId) {
      // If the clicked question is already expanded, close it
      setExpandedQuestionId(null);
    } else {
      // Otherwise, expand the clicked question
      setExpandedQuestionId(questionId);
    }
  };

  return (
    <section className='bg-[#363333] text-white py-10'>
      <div className='mx-auto max-w-[1400px] p-[16px] md:px-[60px]'>
        <h2 className='text-center text-5xl font-bold pb-10'>
          Most Common Questions About Tiling
        </h2>

        <div className='md:w-2/3 mx-auto flex flex-col justify-start gap-y-5'>
          {questions.map((question) => (
            <div key={question.id}>
              <div className="flex gap-x-2 justify-start">
              <button
                onClick={() => toggleAnswer(question.id)}
                className='text-2xl text-left'
              >
                {question.question}
              </button>
              <img
                      className={`mx-1 transition-transform duration-300  ${
                        expandedQuestionId === question.id && "transform rotate-180"
                      }`}
                      src={arrow}
                      width={14}
                      height={15}
                      alt='arrow'
                    />
              </div>             
              {expandedQuestionId === question.id && (
                <div className='bg-white text-black text-xl md:ml-10 mt-5 py-2 px-4 rounded-lg font-mono'>
                  {question.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionsList;
