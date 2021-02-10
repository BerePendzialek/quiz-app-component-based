import Header from './components/Header'
import CreateForm from './components/CreateForm'
import createElement from './lib/createElement'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'

const cards = []

const header = Header('Quiz App')

const homePage = HomePage()

const navigation = Navigation(onNavigate)

const form = CreateForm(onSubmit)

const createPage = createElement(
  'main',
  {
    className: 'CreatePage',
    hidden: true,
  },
  form
)

const grid = createElement(
  'div',
  { className: 'appGrid' },
  header,
  homePage,
  createPage,
  navigation
)

document.body.append(grid)

function onSubmit(question, answer) {
  cards.push({ question, answer })
  homePage.setCards(cards)
}

function onNavigate(text) {
  if (text === 'Home') {
    homePage.hidden = false
    createPage.hidden = true
    // homePage.show()
    //createPage.hide()
    header.setText('Homepage')
  }
  if (text === 'Create') {
    homePage.hidden = true
    createPage.hidden = false
    //homePage.hide()
    //createPage.show()
    header.setText('Create cards')
  }
}
