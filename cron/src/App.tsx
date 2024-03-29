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
  const [isToolTipVisible, setIsToolTipVisible] = useState(false);
  const [isCopyEnabled, setIsCopyEnabled] = useState(false);
  const resultText = `${countMonth} ${countDay} ${countWeek} ${countTime} ${countMinutes}`;

  const handleClick = () => {
    navigator.clipboard.writeText(resultText);
    setIsToolTipVisible(true);
  }

  const handleMonthChange = (value: string) => {
    setCountMonth(value);
  }

  const handleDayChange = (value: string) => {
    setCountDay(value);
  }

  const handleWeekChange = (value: string) => {
    setCountWeek(value);
  }

  const handleTimeChange = (value: string) => {
    setCountTime(value);
  }

  const handleMinutesChange = (value: string) => {
    setCountMinutes(value);
  }

  useEffect(() => {
    if (isToolTipVisible) {
      alert('コピーしました!');
      setIsToolTipVisible(false);
    }
  }, [isToolTipVisible]);

  useEffect(() => {
    if (resultText !== '* * * * *') {
      setIsCopyEnabled(true);
    }
  }, [resultText]);

  return (
    <div className="app-body">
      < Title />
      <div className="content">
        <div className="pull-down">
          <Select
            name="毎月"
            items={itemsMonth}
            handleChange={handleMonthChange} />
          <Select
            name="毎日"
            items={itemsDay}
            handleChange={handleDayChange} />
          <Select
            name="毎週"
            items={itemsWeek}
            handleChange={handleWeekChange} />
          <Select
            name="毎時"
            items={itemsTime}
            handleChange={handleTimeChange} />
          <Select
            name="毎分"
            items={itemsMinutes}
            handleChange={handleMinutesChange} />
        </div>
        <div className="result">
          <Result
            resultText={resultText}
          />
          {isCopyEnabled && <Copy
            handleClick={handleClick}
          />}
        </div>
      </div>
    </div>
  );
}

export default App;
