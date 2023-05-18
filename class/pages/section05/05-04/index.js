import { useRouter } from 'next/router'

export default function StaticRoutingPage() {

  const router = useRouter()
  
  const onClickMove1 = () => {
    router.push("/section05/05-04-dynamic/1")
  }
  const onClickMove2 = () => {
    router.push("/section05/05-04-dynamic/2")
  }
  const onClickMove3 = () => {
    router.push("/section05/05-04-dynamic/3")
  }
  return (
    <>
      <button onClick={onClickMove1}>1 이동하기</button>
      <button onClick={onClickMove2}>2 이동하기</button>
      <button onClick={onClickMove3}>3 이동하기</button>
    </>
  )
}