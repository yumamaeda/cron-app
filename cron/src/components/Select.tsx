import React from 'react';

interface Props {
  name: string;
  items: Array<number | string>
  setCount: any;
}

function Select(props: Props) {
  return (
    <React.Fragment>
      <select onChange={(select) => props.setCount(select.target.value)}>
        <option value="*" selected>
          {props.name}
        </option>
        {props.items.map((item: number | string, index: number) => { return <option value={index + 1}>{item}</option> })}
      </select>
    </React.Fragment>
  );
}

export default Select;