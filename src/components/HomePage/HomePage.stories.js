import HomePage from './HomePage'

export default {
  title: 'HomePage',
  component: HomePage,
}

export const base = () =>
  HomePage([
    {
      question: 'Is this your question?',
      answer: 'Sure and here is my answer to it',
    },
    {
      question: 'Is this your question?',
      answer: 'Sure and here is my answer to it',
    },
  ]).el
