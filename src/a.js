import style from './style/index.scss'

const name = document.createElement('p')
name.textContent = 'allen'
name.classList.add(style.name)
document.body.appendChild(name)
export default () => console.log('~~~~~~~~~~a~~~~~~~~~~~')
