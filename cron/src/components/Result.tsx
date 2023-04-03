import React from 'react';

interface Props {
  resultText: string;
}

function Result(props: Props) {
  return (
    <p className="content__select-result">{props.resultText}</p>
  )
}

export default Result;