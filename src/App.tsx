import { useState } from 'react';
import './App.css';
import { NavBar } from './NavBar';

function App() {

  const [s, setS] = useState("");

  type btn = {
    btn: string[]
  }

  const addNum = (b: string): void => {
    setS(pre => pre + b);
  }

  const Btn = ({ btn }: btn): JSX.Element => {

    return (<div>
      {
        btn.map((el, idx) => <button onClick={() => addNum(el)} key={idx} className="btn m">{el}</button>)
      }
    </div >);
  }

  const finisch = (str: string): void => {

    const bc = str.match(/\d+/gi);
    const bv = str.match('[-+*÷]')?.[0];

    if (bc) {

      const a = parseInt(bc[0]);
      const b = parseInt(bc[1]);
      switch (bv) {

        case '+': setS((a + b).toString());
          break;
        case '÷': setS((a / b).toString());
          break;
        case '*': setS((a * b).toString());
          break;
        case '-': setS((a - b).toString());
          break;
      }
    }
  }

  return (
    <div>
      <NavBar />
      <p className="center" style={{ padding: 10 }}>Первый калькулятор для Cереги</p>
      <div className="calck">
        <label htmlFor="text1">Калькулятор</label>
        <input value={s} disabled id="text1"></input>
        <div>
          <Btn btn={['7', '8', '9', '÷']} />
        </div>
        <div>
          <Btn btn={['4', '5', '6', '*']} />
        </div>
        <div>
          <Btn btn={['1', '2', '3', '-']} />
        </div>
        <div style={{ display: 'flex' }}>
          <Btn btn={['0', ',', '+']} />
          <button onClick={() => finisch(s)} className="btn n">=</button>
        </div>
      </div>
    </div >
  );
}

export default App;
