import Card from './components/Card'
import Header from './components/Header'
import createElement from './lib/createElement'
import Navigation from './components/Navigation'

const { el: headerEl, setText: setHeaderText } = Header(
  'Quiz App',
  'May the best win'
)

const navigation = Navigation(onNavigate)

function onNavigate(text) {
  console.log(text)
}

const grid = createElement(
  'div',
  { className: 'appGrid' },
  headerEl,
  Card(
    'What does the array method .filter do?',
    'Returns an array with all matching elements'
  ),
  navigation
)

setHeaderText('Create', 'a new card')

document.body.append(grid)
