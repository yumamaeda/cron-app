import React, { Dispatch, SetStateAction } from 'react';
import { IoIosCopy } from "react-icons/io";

interface Props {
  resultText: string;
  setToolTip: Dispatch<SetStateAction<boolean>>;
}

function Copy(props: Props) {
  const onClickButton = () => {
    navigator.clipboard.writeText(props.resultText);
    props.setToolTip(true);
  }

  return (
    <button id="copy" className="cron__copy" onClick={onClickButton}><IoIosCopy id="save__icon" /></button>
  )
}

export default Copy;