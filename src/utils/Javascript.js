const obj = {
  "questionText": "Which of the following is the correct syntax of media queries?",
  "areMultyAnswers": false,
  "answers": [
    {
      "text": "@media (min-width: 800px) {\n  body { background: white; }\n}\n@media (min-width: 401px ,  max-width: 799px) {\n  body { background: black; }\n}\n@media (max-width: 400px) {\n  body { background: blue; }\n}"
    },
    {
      "text": "@media (min-width: 800px) {\n  body { background: white; }\n}\n@media (min-width: 401px max-width: 799px) {\n  body { background: black; }\n}\n@media (max-width: 400px) {\n  body { background: blue; }\n}"
    },
    {
      "text": "@media (min-width: 800px) {\n  body { background: white; }\n}\n@media (min-width: 401px) and (max-width: 799px) {\n  body { background: black; }\n}\n@media (max-width: 400px) {\n  body { background: blue; }\n}"
    },
    {
      "text": "@media (min-width: 800px) {\n  body { background: white; }\n}\n@media (min-width: 401px) (max-width: 799px) {\n  body { background: black; }\n}\n@media (max width: 400px) {\n  body { background: blue; }\n}"
    }
  ]
}

console.log(obj.questionText)
obj.answers.forEach((answer, i) => {
  console.log(i)
  console.log(answer.text)
})
