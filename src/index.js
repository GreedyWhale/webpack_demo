// import './test1'
// import './test2'

const button = document.createElement('button')
button.textContent = '点我'
document.body.appendChild(button)
button.onclick = () => {
  import(
    /* webpackChunkName: "clickHandler" */
    /* webpackPreload: true */
    './clickHandler')
    .then(({
      default: clickHandler
    }) => clickHandler())
}