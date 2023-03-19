import React from 'react';

interface Props {
  resultText: string;
}

function Result(props: Props) {
  return (
    <input type="text" id="result" className="cron__result" value={props.resultText} />
  )
}

export default Result;