import CreatePage from './components/CreatePage'
import Grid from './components/Grid/Grid'
import Header from './components/Header'
import HomePage from './components/HomePage/HomePage'
import Navigation from './components/Navigation/Navigation'

export default function App() {
  const cards = []

  const header = Header('Quiz App')
  const navigation = Navigation(onNavigate)
  const homePage = HomePage()
  const createPage = CreatePage(onSubmit, true)

  const grid = Grid(header, homePage, createPage, navigation)
  document.body.append(grid)

  function onSubmit(question, answer) {
    cards.push({ question, answer })
    homePage.setCards(cards)
  }

  function onNavigate(text) {
    if (text === 'Home') {
      homePage.show()
      createPage.hide()
      header.setText('Quiz App')
    }

    if (text === 'Create') {
      homePage.hide()
      createPage.show()
      header.setText('Create cards')
    }
  }
}
