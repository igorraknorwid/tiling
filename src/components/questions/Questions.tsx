import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Question } from "../../types/main_page";

import arrow from "../../images/navbar/arrow.svg";

interface Props {
  questions: Question[];
}

const QuestionsList: React.FC<Props> = ({ questions }) => {
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(
    1
  );
  const [q, setQuestions] = useState([] as Question[]);

  React.useEffect(() => {
    const fetchMarkdown = async () => {
      // const response = await fetch("/public/tiles.md");
      // const data = await response.text();
      // const dividedText = data.split("&");
      // const mapedQuestions = questions.map((q, i) => {
      //   return { ...q, answer: dividedText[i] };
      // });
      setQuestions(questions);
      // setMarkdown(data);
    };

    fetchMarkdown();
  }, []);

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
        <h2 className='text-center text-3xl md:text-5xl font-bold pb-10'>
          Most Common Questions About Tiling
        </h2>

        <div className='md:w-2/3 mx-auto flex flex-col justify-start gap-y-5'>
          {q.map((question) => (
            <div key={question.id}>
              <div className='flex gap-x-2 justify-start md:hover:underline'>
                <button
                  onClick={() => toggleAnswer(question.id)}
                  className='md:text-2xl text-left'
                >
                  {question.question}
                </button>
                <img
                  className={`mx-1 transition-transform duration-300 cursor-pointer ${
                    expandedQuestionId === question.id && "transform rotate-180"
                  }`}
                  src={arrow}
                  width={14}
                  height={15}
                  alt='arrow'
                  onClick={() => toggleAnswer(question.id)}
                />
              </div>
              {expandedQuestionId === question.id && (
                <div className='md:text-lg mt-5 rounded-lg font-mono border-2 p-2 markdown'>
                  <ReactMarkdown>{question.answer}</ReactMarkdown>
                </div>
              )}
            </div>
          ))}
          {q.length === 0 && (
            <div>
              {questions.map((q) => (
                <div key={q.id}>
                  <div>{q.question}</div>
                  <div>{q.answer}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuestionsList;
