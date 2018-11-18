import React from "react"

const Question = props => {
  const answers = props.answers.map((elem, i) => {
    const text = elem.text.replace(/\n/gi, '<br />')
    console.log(text)
    if (props.areMulty) {
      return (
        <label key={i}>
          <input
            type="checkbox"
            checked={!!elem.isCorrect}
            onChange={() => props.handleCheckbox(props.number, i)}
          />
          {text}
        </label>
      )
    }
    return (
      <label key={i}>
        <input type="radio" checked={!!elem.isCorrect} />
        {text}
      </label>
    )
  })
  console.log(props)
  return (
    <div className="question">
      <h3>Question #{props.number + 1}</h3>
      <p>{props.areMulty}</p>
      <h4>Question: {props.question}</h4>
      <div className="answers">{answers}</div>
    </div>
  )
}

export default Question
