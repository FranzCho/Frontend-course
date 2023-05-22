// 컴포넌트 위에 만든 이유: 컴포넌트가 리랜더링 되어도 다시 안만들어짐 - 효율적
const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스캣" },
  { number: 3, title: "산딸기" },
  { number: 4, title: "오렌지" },
  { number: 5, title: "한라봉" },
  { number: 6, title: "사과" },
  { number: 7, title: "애플망고" },
  { number: 8, title: "망고" },
  { number: 9, title: "수박" },
  { number: 10, title: "멜론" },
];

export default function MapFruitsPage() {
  // 1.basic example
  const aaa = [<div>1. apple</div>, <div>2. grape</div>, <div>3. grape</div>]

  // 2. 실무 백엔드 데이터 예제
  const bbb = FRUITS.map(el => <div>{el.number} {el.title}</div>)


  return (
    <>
      <>{aaa}</>
      ==============
      <>{bbb}</>
      ==============
      {/* 3. 실무 효율적인 랜더링 예제 */}
      <div>
        {FRUITS.map(el => <div>{el.number} {el.title}</div>)}
      </div>
    </>
  )
}