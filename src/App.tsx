import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import data from "./utils/data.json";

function App() {
  const [target, setTarget] = useState(0);
  const [SummaryAmount, setSummaryAmount] = useState(0);

  useEffect(() => {
    window.document.title = "Expenses chart app"

    let sum: number = 0;
    data.forEach((elem) => (sum += elem.amount));
    setSummaryAmount(sum);
  }, []);

  return (
    <div className="App">
      <Layout>
        <div className="container">
          <div className="balance">
            <div>
              <span>My balance</span>
              <span>$921.48</span>
            </div>
            <span className="logo"></span>
          </div>
          <div className="chart">
            <h1>Spending - Last 7 days</h1>
            <div className="chart-section">
              {data?.map((chart) => {
                const { day, amount } = chart;
                return (
                  <div key={day} className="chart-column">
                    {target === amount && (
                      <div className="amount">{amount}</div>
                    )}
                    <div
                      onMouseEnter={() => setTarget(amount)}
                      onMouseLeave={() => setTarget(0)}
                      style={{ height: `${(amount / SummaryAmount) * 100}%` }}
                      className="column"
                    />
                    <div>{day}</div>
                  </div>
                );
              })}
            </div>
            <div className="summary">
              <div className="balance-summary">
                <h3>Total this month</h3>
                <span>$478.33</span>
              </div>
              <div className="percentage">
                <span>+2.4%</span>
                <span>from last month</span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
