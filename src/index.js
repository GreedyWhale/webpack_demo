import './test1'
import './test2'

import(/* webpackChunkName: "dayjs" */ 'dayjs').then(({default: dayjs}) => console.log(dayjs().format()))