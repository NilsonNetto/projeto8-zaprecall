
export default function QuestionTitle({ title, setQuestionState }) {
  return (
    <div className='question title'>
      <p>{title}</p>
      <img onClick={() => setQuestionState('answer')} src="images/setinha.png" alt="See answer"></img>
    </div>
  )
}
