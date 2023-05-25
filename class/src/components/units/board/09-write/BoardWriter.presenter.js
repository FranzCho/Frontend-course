import { RedInput, BlueButton } from './BoardWrite.style'
export default function BoardWriteUI(props) {
  
  return (
    <>
      writer: <RedInput type='text' onChange={props.onChangeWriter}/>
      title: <input type='text' onChange={props.onChangeTitle}/>
      contents: <input type='text' onChange={props.onChangeContents}/>
      <BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
        {props.idEdit ? "수정" : "등록"}하기
      </BlueButton>
  </>
  )
}