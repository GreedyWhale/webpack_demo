import './test1'
import './test2'

function getCurrentTime () {
  return import(/* webpackChunkName: "dayj" */ 'dayjs').then(({ default: dayjs }) => {
    const p = document.createElement('p')
    p.textContent = dayjs().format('YYYY年MM月DD日 HH:mm:ss')
    return p
  })
}

const button = document.createElement('button')
button.textContent = '点我'
document.body.appendChild(button)
button.onclick = () => {
  getCurrentTime().then(el => document.body.appendChild(el))
}