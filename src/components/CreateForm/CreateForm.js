import createElement from '../../lib/createElement'
import './CreateForm.css'

export default function CreateForm(onSubmit) {
  const form = createElement('form', {
    className: 'CreateForm',
    innerHTML: `
    <label>
    Question:
<input name="question" placeholder="What is...?">
    </label>
    <label>
    Answer:
<input name="answer" placeholder="What is...?">
    </label>
  
    <button>Create question</button>
    `,
  })

  form.addEventListener('submit', event => {
    event.preventDefault()
    const { question: questionInput, answer: answerInput } = form.elemements
    const question = questionInput.value
    const answer = answerInput.value

    onSubmit(question, answer)
  })
  return form
}
