function getCurrentDate () {
  return import(/* webpackChunkName: "dayjs" */ 'dayjs').then(({ default: dayjs }) => {
    const p = document.createElement('p')
    p.textContent = dayjs().format('YYYY年MM月DD日 HH:mm:ss')
    document.body.appendChild(p)
  })
}

export default getCurrentDate;