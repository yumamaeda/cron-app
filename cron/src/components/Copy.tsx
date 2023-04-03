import React from 'react';
import { IoIosCopy } from "react-icons/io";

interface Props {
  handleClick: () => void;
}

function Copy(props: Props) {
  return (
    <button className="content__copy-btn" onClick={props.handleClick}><IoIosCopy /></button>
  )
}

export default Copy;