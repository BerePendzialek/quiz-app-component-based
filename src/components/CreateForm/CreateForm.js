import createElement from '../../lib/createElement'
import './CreateForm.css'

export default function CreateForm() {
  const el = createElement('form', {
    className: 'CreateForm',
    innerHTML: `
    <label>
    Question:
<input name="question" placeholder="What is...?">
    </label>
    <label>
    Answer:
<input name="question" placeholder="What is...?">
    </label>
    <label>
    Tags:
<input name="question" placeholder="Tags separated by comma?">
    </label>
    <button>Create question</button>
    `,
  })
  return el
}
