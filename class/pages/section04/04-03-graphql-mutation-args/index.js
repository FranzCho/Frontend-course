import { gql, useMutation } from '@apollo/client'

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
  const [ myFunction ] = useMutation(myGraphqlSetting)

  const onClickSubmit = async () => {
    const result = await myFunction({
      variables: {                   // variables
        writer: "Tony",
        title: "hell yeah",
        contents: "jesus"
      }
    })
    console.log(result)
  }


  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  )
}