const initCard = () => {
  const postheader = document
    .querySelector('.post .post_header')
    .getBoundingClientRect().height
  document.querySelectorAll('.card').forEach(c => c.style.height = postheader + 'px')
}

initCard()

const activeCurrentNavLink = () => {
  document.querySelectorAll('nav ul li').forEach((navLink) =>
    navLink.addEventListener('click', (event) => {
      let current = document.querySelector('.active')
      event.currentTarget.classList.add('active')
      current.classList.remove('active')
    }),
  )
}

const reduceCard = (element) => {
  let postheader = element
    .querySelector('.post .post_header')
    .getBoundingClientRect().height
  element.style.height = postheader + 'px'
}

const expandCard = (element) => {
  let post = element
    .querySelector('.post').getBoundingClientRect().height
  element.style.height = post + 'px'
}

document
  .querySelectorAll('.card')
  .forEach((item) => item.addEventListener('mouseover', () => expandCard(item)))

document
  .querySelectorAll('.card')
  .forEach((item) => item.addEventListener('mouseout', () => reduceCard(item)))

document.querySelectorAll('button.btn-select').forEach((btnSelect) => {
  btnSelect.addEventListener('click', (event) => {
    setCssVariable(event.currentTarget.value)
  })
})

const setCssVariable = (element) => {
  const rootCss = document.querySelector(':root')
  const rootCssStyle = getComputedStyle(rootCss)
  let rootVarColor = rootCssStyle.getPropertyValue(`--${element}_color`)
  if (rootVarColor) {
    rootCss.style.setProperty('--primary_color', rootVarColor)
  }
}

document.querySelector('.cards-light').addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('active')
  document
    .querySelectorAll('.card')
    .forEach((card) => card.classList.toggle('light'))
})

activeCurrentNavLink()

