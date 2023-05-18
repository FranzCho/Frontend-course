import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

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
  const router = useRouter()

  const [ myFunction ] = useMutation(myGraphqlSetting)

  const onClickSubmit = async () => {

    try {
      // try에 있는 내용 실패하면 다음에 있는 모든 줄들을 모두 무시, catch에 있는 내용이 실행.
      
      const result = await myFunction({
        variables: {                   // variables
          writer: "Tony",
          title: "hell yeah",
          contents: "jesus"
        }
      })
      console.log(result)
      router.push(`/section05-05-05-dynamic/${result.data.createBoard.number}`)
    
    } catch (error) {
      alert(error.message)
    }
    
  }


  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  )
}