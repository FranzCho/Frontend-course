import { gql, useMutation } from '@apollo/client'

const CreateProduct = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){ # 변수의 타입 적는 곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {        # 실제 우리가 전달할 변수 적는 곳      _id
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage() {
  const [ createProduct ] = useMutation(CreateProduct)

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "Tony",
        createProductInput: {
        name: "iron man",
        detail: "so good",
        price: 3000
        }
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