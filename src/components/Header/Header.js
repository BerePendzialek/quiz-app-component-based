import createElement from '../../lib/createElement'
import './Header.css'

export default function Header(title, subtitle) {
  const el = createElement('header', {
    className: 'Header',
  })

  setText(title, subtitle)

  function setText(title, subtitle) {
    el.innerHTML = `
  <h1 class= 'Header_title'>${title}
  <span class='Header_subtitle'>${subtitle}</span>
  `
  }
  return {
    el,
    setText,
  }
}
