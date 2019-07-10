const ajax = () => {
  const xhr = new XMLHttpRequest()
  const url = '/api/wikisecond/lemmasecond?lemmaId=10629668'
  xhr.open('get', url)
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
      console.log(JSON.parse(xhr.responseText))
    }
  }
  xhr.send()
}

export default ajax