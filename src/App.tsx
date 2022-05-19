import React, { useState } from "react";
import "./styles/index.css";
import { ChartWindow } from "./ChartWindow";
import { addNewSymbol } from "./utils/addNewSymbol";

const App = () => 
{
  const [charts, setCharts] = useState(['ETHUSDT','BTCUSDT','ETHUSDT','BTCUSDT']);

  return (
    <div className="App">
      <button onClick={()=>addNewSymbol('BTCUSDT')}>add</button>
      {charts.map((e,i)=><ChartWindow key={e+i} symbol={e} />)}
    </div>
  );
}

export default App;
