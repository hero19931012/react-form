import { useContext, createContext } from 'react';
import styled from 'styled-components';
import Color from './Constants'

const HandlerContext = createContext();


const OutterWrapper = styled.main`
  background-color: ${Color.background};
  padding: 100px 40px 64px 40px;
`

const FormBody = styled.div`
  margin: 0 auto;
  max-width: 645px;
  min-height: calc(100vh - 164px - 69px);
  box-shadow: 1.8px 2.4px 5px 0 rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-top: ${Color.highlight} solid 8px;
  background-color: ${Color.white};
`

const FormWrapper = styled.form`
  margin: 0px 20px 0px 20px;
  padding: 54px 42px 35px 42px;
`

const FormTitle = styled.h1`
  margin: 0px 0px 35px 0px;
  font-size: 36px;
  font-weight: bold;
`

const FormInfo = styled.h4`
  & p {
    margin-bottom: 11px;
    font-size: 14px;
    }
`

const FormNotice = styled.p`
  color: ${Color.textWarning};
`

const FormHeader = () => {
  return (
    <div className="header">
      <FormTitle>
        新拖延運動報名表單
      </FormTitle>
      <FormInfo>
        <p>活動日期：2020/12/10 ~ 2020/12/11</p>
        <p>活動地點：台北市大安區新生南路二段1號</p>
        <FormNotice>*必填</FormNotice>
      </FormInfo>
    </div>
  );
}

const FormQuestions = styled.div``

const QuestionWrapper = styled.div`
  margin-bottom: 50px;
`

const QuestionTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;

  &:after {
    content: "*";
    color: ${Color.textWarning};
    font-size: 20px;
  }
`

const ErrorMessage = styled.div`
  color: ${Color.textWarning};
`

const Input = styled.input`
  border: ${Color.inputBorder} solid 1px;
  width: 50%;
  padding: 8px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const RadioOptions = styled.div`
  display: flex;
  flex-direction: column;
`

const Radio = ({ options }) => {
  const [, handleRadioClick, indexOfAnswer] = useContext(HandlerContext)

  return (
    <RadioOptions onChange={(e) => {
      handleRadioClick(e, indexOfAnswer)
    }}>
      {
        options.map((option, index) => {
          return (
            <label key={index}>
              <input type="radio" name="registerType" />
              { option.content}
            </label>
          )
        })
      }
    </RadioOptions>
  )
}

const Question = ({ question, answers }) => {
  const [handleInputChange, , index, errorMessages] = useContext(HandlerContext)
  return (
    <QuestionWrapper>
      <QuestionTitle>
        {question.title}
      </QuestionTitle>
      {
        question.input.inputType === 'input' ? <Input placeholder={question.input.placeholder} onChange={(e) => {
          handleInputChange(e, index)
        }} value={answers[index].value} /> : ''
      }
      {
        question.input.inputType === 'radio' ? <Radio options={question.input.options} /> : ''
      }
      { errorMessages[index] && <ErrorMessage>{errorMessages[index]}</ErrorMessage>}
    </QuestionWrapper>
  )
}


const SubmitButton = styled.button`
  margin-bottom: 21px;
  background: ${Color.highlight};
  border: none;
  border-radius: 3px;
  height: 40px;
  line-height: 40px;
  width: 92px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`

const Warning = styled.h4`
  font-size: 14px;
  margin-bottom: 10px;
`

function Form({
  answers,
  questionList,
  handleInputChange,
  handleRadioClick,
  handleSubmit,
  errorMessages
}) {
  return (
    <OutterWrapper>
      <FormBody>
        <FormWrapper>
          <FormHeader />
          <FormQuestions >
            {
              questionList.map((question, index) => {
                return (
                  <HandlerContext.Provider
                    key={index}
                    value={[
                      handleInputChange,
                      handleRadioClick,
                      index,
                      errorMessages
                    ]}>
                    <Question
                      key={index}
                      question={question}
                      answers={answers}
                    />
                  </HandlerContext.Provider>
                )
              })
            }
          </FormQuestions>
          <Warning>請勿透過表單送出您的密碼。</Warning>
          <SubmitButton type="submit" onClick={handleSubmit}>提交</SubmitButton>
        </FormWrapper>
      </FormBody>
    </OutterWrapper>

  );
}

export default Form;
