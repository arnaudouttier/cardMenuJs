const activeCurrentNavLink = () => {
  document.querySelectorAll("nav ul li").forEach(navLink => 
    navLink.addEventListener("click", event =>{
      let current = document.querySelector(".active");
      event.currentTarget.classList.add("active");
      current.classList.remove("active");
    } )
  )
}

const reduire = (element) => {
  let posteader = element.querySelector('.post .post_eader').getBoundingClientRect().height
  element.style.height = posteader + 'px'
  return posteader
}

const etendre = (element) => {
  let postContent = element.querySelector('.post .post_content')
  postContent.style.padding = '2rem'
 const elementA = element.scrollHeight
 element.style.height = elementA + 'px'
}

const setCssVariable = (element) => {
  const rootCss = document.querySelector(':root')
  const rootCssStyle = getComputedStyle(rootCss)
  let rootVarColor = rootCssStyle.getPropertyValue(`--${element}_color`)
  if(rootVarColor ){
    rootCss.style.setProperty('--primary_color', rootVarColor);
  }
}

document.querySelector('select').addEventListener('change' ,  event =>{
  setCssVariable(event.currentTarget.value)
})

document.querySelectorAll(".card").forEach(item => 
  item.addEventListener("mouseover", () =>etendre(item)),
)

document.querySelectorAll(".card").forEach(item => 
  item.addEventListener("mouseout", () =>reduire(item))
)

activeCurrentNavLink()






