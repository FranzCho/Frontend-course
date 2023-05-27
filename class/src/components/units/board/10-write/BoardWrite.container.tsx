import { useMutation } from '@apollo/client'
import { ChangeEvent, useState } from 'react'
import BoardWriteUI from './BoardWriter.presenter'
import { UPDATE_BOARD, myGraphqlSetting } from './BoardWrite.queries'
import { useRouter } from 'next/router'
import { IBoardWriteProps, IMyvariables } from './BoardWrite.types'


export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter()

  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const [myFunction] = useMutation(myGraphqlSetting)
  const [updateBoard] = useMutation(UPDATE_BOARD)

  const onClickSubmit = async () => {
    const result = await myFunction({
      variables: {                   // variables
        writer: writer,
        title: title,
        contents: contents
      }
    })
    console.log(result)
    router.push(`/section10/10-02/${result.data.createBoard.number}`)
    
  }

  const onClickUpdate = async () => {


    const myvariables: IMyvariables = {
      number: Number(router.query.number)
    }
    if (writer !== "") {
      myvariables.writer = writer
    }
    if (title) {
      myvariables.title = title
    }
    if (contents !== "") {
      myvariables.contents = contents
    }
    // 여기서 수정!
    const result = await updateBoard({
      variables: myvariables
    })
    router.push(`/section10/10-02/${result.data.updateBoard.number}`)
  }

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value)
  }
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value)
  }

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data} // undefined 이거나 data 이거나 둘 중 하나!
    />
  )
}