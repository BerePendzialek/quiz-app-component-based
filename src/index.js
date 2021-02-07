import Button from './components/Button'
import Card from './components/Card'
import Header from './components/Header'

const header = Header('Quiz App', 'May the best win')
document.body.append(header)

const button = Button('Click me!')
document.body.append(button)

const card = Card(
  'What does the array method .filter do?',
  'Returns an array with all matching elements'
)
document.body.append(card)
