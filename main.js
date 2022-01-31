const activeCurrentNavLink = () => {
  document.querySelectorAll('nav ul li').forEach((navLink) =>
    navLink.addEventListener('click', (event) => {
      let current = document.querySelector('.active')
      event.currentTarget.classList.add('active')
      current.classList.remove('active')
    }),
  )
}

document
  .querySelectorAll('.card')
  .forEach((item) => item.addEventListener('mouseover', () => expandCard(item)))

document
  .querySelectorAll('.card')
  .forEach((item) => item.addEventListener('mouseout', () => reduce(item)))

const reduce = (element) => {
  let postheader = element
    .querySelector('.post .post_header')
    .getBoundingClientRect().height
  element.style.height = postheader + 'px'
  return postheader
}

const expandCard = (element) => {
  let postContent = element.querySelector('.post .post_content')
  postContent.style.padding = '2rem'
  const elementA = element.scrollHeight
  element.style.height = elementA + 'px'
}

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

activeCurrentNavLink()
