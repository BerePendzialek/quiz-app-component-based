import Button from './components/Button'
import Card from './components/Card'
import Header from './components/Header'
import createElement from './lib/createElement'

const grid = createElement(
  'div',
  { className: 'appGrid' },
  Header('Quiz App', 'May the best win'),
  Card(
    'What does the array method .filter do?',
    'Returns an array with all matching elements'
  ),
  Button('Click me!')
)

document.body.append(grid)
