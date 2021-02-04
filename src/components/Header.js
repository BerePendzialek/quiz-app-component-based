import createElement from '../lib/createElement'
import './Header.css'

export default function Header(title, subtitle) {
  const el = createElement('header', {
    className: 'Header',
  })
  const headerTitle = createElement('h1', {
    className: 'Header__title',
    innerText: title,
  })
  const headerSubtitle = createElement('span', {
    className: 'Header__subtitle',
    innerText: subtitle,
  })

  el.append(headerTitle, headerSubtitle)
  return el
}
