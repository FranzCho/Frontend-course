import React, { useState } from "react";
import { Rate } from "antd";

// const App: React.FC = () => {
//   const [value, setValue] = useState(3);

//   return (
//     <span>
//       <Rate tooltips={desc} onChange={setValue} value={value} />
//     </span>
//   );
// };

// export default App;

export default function App(): JSX.Element {
  const [value, setValue] = useState(0);

  // 1단계 방식
  // const onChangeStar = (value: number): void => {
  //   setValue(value)
  // }

  // 2단계 방식
  // const onChangeStar = (value) => setValue(value);

  return (
    <>
      {/* <Rate onChange={onChangeStar} value={value} />   */}{" "}
      {/* 1단계 방식 */}
      {/* <Rate onChange={onChangeStar} value={value} />   */}{" "}
      {/* 2단계 방식 */}
      {/* <Rate onChange={(value) => setValue(value) value(value)} />   */}{" "}
      {/* 3단계 방식 */}
      <Rate onChange={setValue} value={value} /> {/* 4단계 방식 */}
    </>
  );
}
