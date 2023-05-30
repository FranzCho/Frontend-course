export interface IProfile {
  name: string
  age: number
  school: string
  hobby?: string
}

// 1. Partial type
type aaa = Partial<IProfile>

// 2. required type
type bbb = Required<IProfile>

// 3. Pick type
type ccc = Pick<IProfile, "name" | "age">

// 4. Omit type 
type ddd = Omit<IProfile, "school">

// 5. Record type
type eee = "c" | "v" | "b" // union type
let child1: eee = "b"
let child2: string = "a"

type fff = Record<eee, IProfile> // Record type

// 6. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile // "name"| "age" | "school" | "hobby"
let myprofile: ggg = "hobby"

// 7. type vs interface 차이 => interface는 선언병합 가능
export interface IProfile {
  candy: number // 선업병합으로 추가됨
}

// 8. 배운 것 응용
let profile: Partial<IProfile> = {
  candy: 10
}



