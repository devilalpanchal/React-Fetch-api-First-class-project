import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";
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
          <table key={index} className="card">
            <tr>
              <td>
                <img className="imge" src={dataObj.image}></img>
              </td>
            </tr>
            <tr>
              <td>
                <p>{dataObj.name}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>{dataObj.symbol}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>${dataObj.current_price}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>${dataObj.total_volume}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>{dataObj.atl}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>Mkt Cap : ${dataObj.market_cap}</p>
              </td>
            </tr>
          </table>
        );
      })}
    </div>
  );
}

export default App;
// <div key={index} className="card">
//   <img className="imge" src={dataObj.image}></img>
//   <p>{dataObj.name}</p>
//   <p>{dataObj.symbol}</p>
//   <p>${dataObj.current_price}</p>
//   <p>${dataObj.total_volume}</p>
//   <p>{dataObj.atl}</p>
//   <p>Mkt Cap : ${dataObj.market_cap}</p>
// </div>
