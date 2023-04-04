// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, onStateChange} = props
  const {id, questionText, answerText, isShow} = faqDetails
  const showOrHide = !isShow ? 'hide' : ''
  const imgUrl = isShow
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altText = isShow ? 'minus' : 'plus'
  const stateChange = () => onStateChange(id)
  return (
    <li className="faq-item">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <img
          className="plus-minus-logo"
          alt={altText}
          src={imgUrl}
          onClick={stateChange}
        />
      </div>
      <hr className={showOrHide} />
      <p className={`answer ${showOrHide}`}>{answerText}</p>
    </li>
  )
}

export default FaqItem
