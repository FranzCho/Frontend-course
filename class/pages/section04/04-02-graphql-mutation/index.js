import { gql, useMutation } from '@apollo/client'

const myGraphqlSetting = gql`
  mutation {
    createBoard(writer: "wick", title: "yeah", contents: "fuck") {
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage() {
  const [ myFunction ] = useMutation(myGraphqlSetting)

  const onClickSubmit = async () => {
    const result = await myFunction()
    console.log(result)
  }


  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  )
}