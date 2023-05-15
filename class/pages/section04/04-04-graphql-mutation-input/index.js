import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'

const myGraphqlSetting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title , contents: $contents) {
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState()
  const [title, setTitle] = useState()
  const [contents, setContents] = useState()

  const [myFunction] = useMutation(myGraphqlSetting)

  const onClickSubmit = async () => {
    const result = await myFunction({
      variables: {                   // variables
        writer: writer,
        title: title,
        contents: contents
      }
    })
    console.log(result)
  }

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }
  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const onChangeContents = (event) => {
    setContents(event.target.value)
  }

  return (
    <>
      writer: <input type='text' onChange={onChangeWriter}/>
      title: <input type='text' onChange={onChangeTitle}/>
      contents: <input type='text' onChange={onChangeContents}/>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  )
}