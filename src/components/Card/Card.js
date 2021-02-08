import './Card.css'

import createElement from '../../lib/createElement'
import Button from '../Button'

export default function Card(question, answer) {
  const questionEl = createElement('h2', { innerText: question })
  const buttonEl = Button('Show answer')
  const answerEl = createElement('p', { hidden: true, innerText: answer })

  buttonEl.addEventListener('click', () => {
    answerEl.hidden = !answerEl.hidden
  })

  const el = createElement(
    'section',
    { className: 'Card' },
    questionEl,
    buttonEl,
    answerEl
  )

  return el
}
