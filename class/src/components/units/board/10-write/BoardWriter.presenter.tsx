import { ChangeEvent, MouseEvent } from 'react'
import { RedInput, BlueButton } from './BoardWrite.style'
import { IBoardWriteUIProps } from './BoardWrite.types'

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  
  return (
    <>
      writer: <RedInput type='text' onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}/>
      title: <input type='text' onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.writer}/>
      contents: <input type='text' onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.writer}/>
      <BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
        {props.isEdit ? "수정" : "등록"}하기
      </BlueButton>
  </>
  )
}