import { RedInput, BlueButton } from './BoardWrite.style'
export default function BoardWriteUI(props) {
  
  return (
    <>
      writer: <input type='text' onChange={props.bbb}/>
      title: <input type='text' onChange={props.ccc}/>
      contents: <input type='text' onChange={props.ddd}/>
      <button onClick={props.aaa}>GRAPHQL-API 요청하기</button>
  </>
  )
}