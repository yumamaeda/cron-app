import './App.css';
import React, { useState } from 'react';
import { IoIosCopy } from "react-icons/io";


function App() {
  const items__month = [...Array(12)].map((_: undefined, i: number) => i + 1)
  const items__day = [...Array(31)].map((_: undefined, i: number) => i + 1)
  const items__week = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日", "日曜日"];
  const items__time = [...Array(24)].map((_: undefined, i: number) => i)
  const items__minutes = [...Array(60)].map((_: undefined, i: number) => i)
  const [select__month, setSelectMonth] = useState<string>("*");
  const change__month = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectMonth(event.target.value);
    const button = document.getElementById("copy") as HTMLButtonElement;
    const icon = document.getElementById("save__icon") as HTMLButtonElement;
    button.removeAttribute("disabled");
    icon.style.color = "#000000";
  };
  const [select__day, setSelectDay] = useState<string>("*");
  const change__day = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectDay(event.target.value);
    const button = document.getElementById("copy") as HTMLButtonElement;
    const icon = document.getElementById("save__icon") as HTMLButtonElement;
    button.removeAttribute("disabled");
    icon.style.color = "#000000";
  };
  const [select__week, setSelectWeek] = useState<string>("*");
  const change__week = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectWeek(event.target.value);
    const button = document.getElementById("copy") as HTMLButtonElement;
    const icon = document.getElementById("save__icon") as HTMLButtonElement;
    button.removeAttribute("disabled");
    icon.style.color = "#000000";
  };
  const [select__time, setSelectTime] = useState<string>("*");
  const change__time = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectTime(event.target.value);
    const button = document.getElementById("copy") as HTMLButtonElement;
    const icon = document.getElementById("save__icon") as HTMLButtonElement;
    button.removeAttribute("disabled");
    icon.style.color = "#000000";
  };
  const [select__minutes, setSelectMinutes] = useState<string>("*");
  const change__minutes = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectMinutes(event.target.value);
    const button = document.getElementById("copy") as HTMLButtonElement;
    const icon = document.getElementById("save__icon") as HTMLButtonElement;
    button.removeAttribute("disabled");
    icon.style.color = "#000000";
  };

  document.getElementById('copy')?.addEventListener('click', () => {
    const copy__text = document.getElementById("result") as HTMLInputElement;
    copy__text.select();
    navigator.clipboard.writeText(copy__text.value);
  });

  return (
    <div className="body">
      <div className="app__title">Cron</div>
      <div className="app__subtitle">Cronを簡単に生成するアプリです。</div>
      <div className="cron__app">
        <div className="select__cron">
          <select className="select__item" value={select__month} onChange={change__month}>
            <option value="*">毎月</option>
            {items__month.map((e, index) => {
              return <option value={index + 1}>{e}月</option>
            })}
          </select>
          <select className="select__item" value={select__day} onChange={change__day}>
            <option value="*">毎日</option>
            {items__day.map((e, index) => {
              return <option value={index + 1}>{e}日</option>
            })}
          </select>
          <select className="select__item" value={select__week} onChange={change__week}>
            <option value="*">毎週</option>
            {items__week.map((e, index) => {
              return <option value={index + 1}>{e}</option>
            })}
          </select>
          <select className="select__item" value={select__time} onChange={change__time}>
            <option value="*">毎時</option>
            {items__time.map((e, index) => {
              return <option value={index}>{e}</option>
            })}
          </select>
          <select className="select__item" value={select__minutes} onChange={change__minutes}>
            <option value="*">毎分</option>
            {items__minutes.map((e, index) => {
              return <option value={index}>{e}</option>
            })}
          </select>
        </div>
        <input type="text" id="result" className="select__result" value={select__minutes + " " + select__time + " " + select__day + " " + select__month + " " + select__week} disabled></input>
        <button id="copy" className="copy"><IoIosCopy id="save__icon" className="save__icon" /></button>
      </div>
    </div>
  );
}

export default App;
