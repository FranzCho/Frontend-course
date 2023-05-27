export default function TypescriptPage() {
  // 타입 추론
  let aaa = "안녕하세요"
  
  // 타입 명시
  let bbb: string = "반갑습니다"
  
  // 타입명시가 필요한 상황
  let ccc: number | string = 1000
  ccc = "1000원 입니다"
  
  // 숫자 타입
  let ddd: number = 20

  // 불린 타입 (가장 중요)
  let eee: boolean = true
  eee = false
  eee = "false" // true로 작동함

  // 배열 타입
  let fff: number[] = [1, 2, 3, 4, 5]
  let ggg: string[] = ["a", "b", "c"]
  let hhh: (string | number)[] = ["a", "b", 10] // 타입을 추론해서 어떤 타입을 사용하는 알아보기!
  
  // 객체 타입
  interface IProfile {
    name: string
    age: number | string
    country: string
    hobby?: string
  }

  const profile: IProfile = {
    name: "Bond", 
    age: 45,
    country: "UK"
  }
  profile.name = "James" // 타입추론으로 이것만 가능
  profile.age = "49"
  profile.hobby = "sports"

  // 함수 타입
  function add(num1: number, num2: number, unit: string):string {
    return num1 +  num2 + unit
  }
  const result = add(1000, 2000, "won") // 결과의 리턴 타입도 예측 가능!!!
  
  const add2 = (num1: number, num2: number, unit: string):string => {
    return num1 +  num2 + unit
  }
  const result2 = add(1000,2000, "won") // 결과의 리턴 타입도 예측 가능!!!

  return (
    <>
    
    </>
  )
}