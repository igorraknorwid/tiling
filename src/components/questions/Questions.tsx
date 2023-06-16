import React, { useState } from "react";
import { Question } from "../../types/main_page";

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

        <div>
          {questions.map((question) => (
            <div key={question.id}>
              <button onClick={() => toggleAnswer(question.id)}>
                {question.question}
              </button>
              {expandedQuestionId === question.id && (
                <div>{question.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionsList;
