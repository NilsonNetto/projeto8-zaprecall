
import React from "react";
import Answer from "./Answer";
import Answered from "./Answered";
import QuestionNumber from "./QuestionNumber";
import QuestionTitle from "./QuestionTitle";

export default function Deck({ number, title, answer, footerIcons, setFooterIcons }) {

  const [questionState, setQuestionState] = React.useState('questionNumber')

  switch (questionState) {
    case 'questionNumber':
      return <QuestionNumber number={number} setQuestionState={setQuestionState} />;
    case 'questionTitle':
      return <QuestionTitle title={title} setQuestionState={setQuestionState} />;
    case 'answer':
      return <Answer answer={answer} footerIcons={footerIcons} setFooterIcons={setFooterIcons} setQuestionState={setQuestionState} />
    case 'answered':
      return <Answered footerIcons={footerIcons} />
    default:
      return ('error')
  }
}