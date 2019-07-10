export default async () => {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('step 1')
      resolve()
    }, 1000)
  })
  console.log('step 2')
}