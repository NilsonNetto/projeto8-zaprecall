import './QuestionNumber.css'

export default function QuestionNumber({ number, setQuestionState }) {
  return (
    <div className='question'>
      <p>Pergunta {number}</p>
      <ion-icon onClick={() => setQuestionState('questionTitle')} name="play-outline"></ion-icon>
    </div>
  )
}
