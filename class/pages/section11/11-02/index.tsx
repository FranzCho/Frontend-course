import { gql, useQuery } from '@apollo/client'

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS)

  console.log(data?.fetchBoards)

  // const onClickAlert = (evnet: MouseEvent<HTMLDivElement>) => {
  //   alert(event?.target.id + "님이 작성한 글입니다.")
  // }

  

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div>
          <span>
            <input type='checkbox'/>
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }} id={el.writer} onClick={onClickAlert}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {/* <div>1 이동이 완료되었습니다.</div>
      <div>작성자: { data && data.fetchBoard.writer }</div>
      <div>제목: { data?.fetchBoard.title }</div>
      <div>내용: { data ? data.fetchBoard.contents : "Loading..." }</div> */}
    </>
  )
}