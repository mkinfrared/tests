import React, { Component } from "react"
import { connect } from 'react-redux'

import Question from "../Question/Question"

class Test extends Component{
  constructor(props) {
    super(props)
    this.state = {
      testName: this.props.match.params.name,
      test    : []
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const testName = nextProps.match.params.name
    const test = nextProps.test

    if (test !== prevState.test && test !== undefined) {
      return { test }
    }

    return prevState
  }

  render() {
    console.log('props', this.props)
    console.log('state', this.state)
    const testName = this.props.match.params.name

    const questions = this.state.test.map((question, i) => {
      return <Question
        key={i}
        number={i}
        question={question.questionText}
        answers={question.answers}
        areMulty={question.areMultyAnswers}
        handleCheckbox={this.handleCheckboxChange}
      />
    })

    return (
      <div className="test">
        <h2>{testName}</h2>
        {questions}
      </div>
    )
  }

  handleCheckboxChange = (questionNum, answerNum) => {
    const test = { ...this.state.test }
    const isCorrect = test[questionNum].answers[answerNum].isCorrect

    if (isCorrect) {
      delete test[questionNum].answers[answerNum].isCorrect
    } else {
      test[questionNum].answers[answerNum].isCorrect = true
    }

    this.setState({ test })
  }

}

export default connect(({ tests }, ownProps) => ({
  test: tests[ownProps.match.params.name]
}), null)(Test)
