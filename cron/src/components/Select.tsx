import React from 'react';

interface Props {
  name: string;
  items: Array<number | string>
  handleChange: (value: string) => void;
}

function Select(props: Props) {
  return (
    <select onChange={(select) => props.handleChange(select.target.value)}>
      <option value="*" selected>
        {props.name}
      </option>
      {props.items.map((item: number | string, index: number) => { return <option value={index + 1}>{item}</option> })}
    </select>
  );
}

export default Select;