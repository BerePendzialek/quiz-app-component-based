import Card from './components/Card'
import Header from './components/Header'
import CreateForm from './components/CreateForm'
import createElement from './lib/createElement'
import Navigation from './components/Navigation'

const { el: headerEl } = Header('Quiz App', 'May the best win')

const navigation = Navigation(onNavigate)

const homePage = createElement(
  'main',
  { className: 'HomePage', hidden: false },
  Card(
    'What does the array method .filter do?',
    'Returns an array with all matching elements'
  ),
  Card('Why?', 'Because'),
  Card('Which way?', 'That way')
)

const form = CreateForm(onSubmit)

const createPage = createElement(
  'main',
  {
    className: 'CreatePage',
    hidden: true,
  },
  form()
)

const grid = createElement(
  'div',
  { className: 'appGrid' },
  headerEl,
  homePage,
  createPage,
  navigation
)

function onNavigate(text) {
  if (text === 'Home') {
    homePage.hidden = false
    createPage.hidden = true
  }
  if (text === 'Create') {
    homePage.hidden = true
    createPage.hidden = false
  }
}

document.body.append(grid)
