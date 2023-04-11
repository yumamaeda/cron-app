import React from 'react';
import { IoIosCopy } from "react-icons/io";

interface Props {
  handleClick: () => void;
}

function Copy(props: Props) {
  return (
    <button className="result__button" onClick={props.handleClick}><IoIosCopy /></button>
  )
}

export default Copy;