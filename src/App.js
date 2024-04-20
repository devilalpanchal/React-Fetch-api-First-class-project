import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((error) => console.log("Error fetching data: ", error));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h2 className="Codername">devilal wants to Fetch Abi Using React js</h2>
      {data.map((dataObj, index) => {
        return (
          <div key={index} className="card">
            <img className="imge" src={dataObj.image}></img> <hr/>
            <p>{dataObj.name}</p><hr/>
            <p>{dataObj.symbol}</p><hr/>
            <p>${dataObj.current_price}</p><hr/>
            <p>${dataObj.total_volume}</p><hr/>
            <p>{dataObj.atl}</p><hr/>
            <p>Mkt Cap : ${dataObj.market_cap}</p><hr/>
          </div>
        );
      })}
    </div>
  );
}

export default App;
