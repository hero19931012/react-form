import { useEffect, useState } from 'react'
import Form from './Form'
import questionList from './Questions'

function showAnswers(questions) {
  const result = []
  questions.forEach((question) => {
    let { title, value } = question
    result.push(`${title}：${value}`)
  })
  alert("您的回答如下：\n\n" + result.join('\n'))
}


function App() {

  const [questions, setQuestions] = useState(questionList)

  const handleInput = (e, title) => {
    let value
    setQuestions(questions.map((question) => {
      if (question.title === title) {

        // 單選題
        if (question.input.inputType === 'radio') {
          const checkedOption = e.target.parentElement.innerText;
          const newQuestion = { ...question }
          
          newQuestion.input.options = question.input.options.map((option) => {
            // 選出被選取的選項標記為為選取
            if (option.content === checkedOption) {
              return {
                ...option,
                isChecked: true
              }
            } else {
              // 其他的標為未選取
              return {
                ...option,
                isChecked: false
              }
            }
          })

          // 把被選取的值放到問題的回答
          newQuestion.value = checkedOption
          return newQuestion
        }

        // 簡答題
        if (question.input.inputType === 'input') {
          value = e.target.value;
          return {
            ...question,
            value
          }
        }
      } else {
        return question
      }
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let isCompleted = true

    setQuestions(questions.map((question) => {
      if (question.value === '') {
        isCompleted = false;
        const newQuestion = { ...question }
        newQuestion.errorMessage.isShow = true
        return newQuestion
      } else {
        const newQuestion = { ...question }
        newQuestion.errorMessage.isShow = false
        return newQuestion
      }
    }))

    if (isCompleted) {
      showAnswers(questions)
    }
  }

  useEffect(() => {
    document.title = '新拖延運動報名表單'
  }, [])

  return (
    <Form
      questions={questions}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    >
    </Form>
  );
}

export default App;
