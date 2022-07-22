import turnArrow from '../assets/images/setinha.png'
import './QuestionTitle.css'

export default function QuestionTitle({ title, setQuestionState }) {
  return (
    <div className='question title'>
      <p>{title}</p>
      <img onClick={() => setQuestionState('answer')} src={turnArrow} alt="See answer"></img>
    </div>
  )
}
