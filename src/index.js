import a from './a'
import b from './b'
import c from './c'
import ajax from './ajax'
import avatar from './assets/images/avatar.jpeg'
import style from './style/index.scss'
import addItem from './addItem'
import es6Test from './es6-test'

a()
b()
c()

const img = new Image()
img.src = avatar
img.classList.add(style.avatar)
document.body.appendChild(img)
console.log('喂！不得了了！那边的洋芋片半价啊！')
addItem()

if (module.hot) {
  module.hot.accept('./addItem', function () {
    console.log('hello')
  })
}

ajax()

es6Test()