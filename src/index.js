import './helloWorld'

import a from './a'
import b from './b'
import c from './c'
import ajax from './ajax'
import avatar from './assets/images/avatar.jpeg'
import style from './style/index.scss'
import addItem from './addItem'
import es6Test from './es6-test'
import { add } from './methods'
import './style/button.scss'
// import _ from 'lodash'

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

add(1, 2)

// console.log(_.chunk(['a', 'b', 'c', 'd'], 2))

async function getComponent() {
  var element = document.createElement('div');
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
})

function doSomething () {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => _.join(['Hello', 'World'], ' '))
}

doSomething().then(res => console.log(res))

async function doSomething2() {
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
  
  return _.join(['Hello', 'World'], ' ')
}

doSomething2().then(res => console.log(res))