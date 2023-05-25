import { RedInput, BlueButton } from './BoardWrite.style'
export default function BoardWriteUI(props) {
  
  return (
    <>
      writer: <RedInput type='text' onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}/>
      title: <input type='text' onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.writer}/>
      contents: <input type='text' onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.writer}/>
      <BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
        {props.idEdit ? "수정" : "등록"}하기
      </BlueButton>
  </>
  )
}