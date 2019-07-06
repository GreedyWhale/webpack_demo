import a from './a'
import b from './b'
import c from './c'
import avatar from './assets/images/avatar.jpeg'
import style from './style/index.scss'

a()
b()
c()

const img = new Image()
img.src = avatar
img.classList.add(style.avatar)
document.body.appendChild(img)