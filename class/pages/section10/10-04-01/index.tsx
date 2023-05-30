import { gql, useMutation } from '@apollo/client'
import { IMutation, IMutationCreateBoardArgs } from '../../../src/commons/types/generated/types'

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

  // const [ myFunction ] = useMutation<변수타입, 결과타입>(myGraphqlSetting)
  const [ myFunction ] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(myGraphqlSetting)

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