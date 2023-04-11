import React from 'react';

interface Props {
  resultText: string;
}

function Result(props: Props) {
  return (
    <p className="result__text">{props.resultText}</p>
  )
}

export default Result;