import './App.css';
import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Select from './components/Select';
import Result from './components/Result';
import Copy from './components/Copy';

const itemsMonth: number[] = [...Array(12)].map((_, i) => i + 1);
const itemsDay: number[] = [...Array(31)].map((_, i) => i + 1);
const itemsWeek = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日", "日曜日"];
const itemsTime: number[] = [...Array(24)].map((_, i) => i + 1);
const itemsMinutes: number[] = [...Array(60)].map((_, i) => i + 1);

function App() {
  const [countMonth, setCountMonth] = useState('*');
  const [countDay, setCountDay] = useState('*');
  const [countWeek, setCountWeek] = useState('*');
  const [countTime, setCountTime] = useState('*');
  const [countMinutes, setCountMinutes] = useState('*');
  const [toolTip, setToolTip] = useState(false);
  const [copyButton, setCopyButton] = useState(false);
  const resultText = `${countMonth} ${countDay} ${countWeek} ${countTime} ${countMinutes}`;

  useEffect(() => {
    if (toolTip) {
      alert('コピーしました!');
      setToolTip(false);
    }
  }, [toolTip]);

  useEffect(() => {
    if (resultText !== '* * * * *') {
      setCopyButton(true);
    }
  }, [resultText]);

  return (
    <div className="body">
      < Title />
      <div className="cron__app">
        <div className="cron__menu">
          <Select
            name="毎月"
            items={itemsMonth}
            setCount={setCountMonth} />
          <Select
            name="毎日"
            items={itemsDay}
            setCount={setCountDay} />
          <Select
            name="毎週"
            items={itemsWeek}
            setCount={setCountWeek} />
          <Select
            name="毎時"
            items={itemsTime}
            setCount={setCountTime} />
          <Select
            name="毎分"
            items={itemsMinutes}
            setCount={setCountMinutes} />
        </div>
        <Result
          resultText={resultText}
        />
        {copyButton && <Copy
          resultText={resultText}
          setToolTip={setToolTip}
        />}
      </div>
    </div>
  );
}

export default App;
