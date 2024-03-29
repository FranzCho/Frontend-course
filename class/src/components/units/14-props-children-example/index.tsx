interface IExampleProps {
  school: string;
  children: JSX.Element;
}

export default function Example(props: IExampleProps): JSX.Element {
  return (
    <div>
      <div>안녕하세요. 맹구님</div>
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>안녕하세요. 짱구님</div>
    </div>
  );
}
