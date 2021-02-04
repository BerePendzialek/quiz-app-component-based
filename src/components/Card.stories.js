import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

export const base = () =>
  Card(
    'What does the array method .filter do?',
    'Returns an array with all matching elements'
  )

export const option2 = () => Card('What do you do', 'I work here')
