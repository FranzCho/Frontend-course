import Example from "../../../src/components/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
  return (
    <>
      <Example school="Uni">
        <div>
          <input type="text" />
          <div>안녕</div>
          <button>click me!</button>
        </div>
      </Example>
    </>
  );
}
