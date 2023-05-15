import axios from 'axios'

export default function RestGetPage() {
  
  function onClickAsync() {
    const result = axios.get("https://koreanjson.com/posts/1")
    console.log(result)
  }
  // async function onClicksync() {
  //   const result = await axios.get("https://koreanjson.com/posts/1") => 함수 중복 선언 문제
  //   console.log(result)
  //   console.log(result.data.title)
  // }

   const onClicksync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log(result)
    console.log(result.data.title)
  }
  
  return (
    <>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClicksync}>REST-API(동기) 요청하기</button>
    </>
  )
}