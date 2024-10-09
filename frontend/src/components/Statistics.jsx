import React, { useState } from "react";

function Statistics(props) {
  const [statistics, setStatistics] = useState({});

  const { selectedMonth } = props;
  return (
    <div className="statistic-container mt-3">
      <h4 className="text-center">Statistics {selectedMonth}</h4>

      <div className="row row-gap-3">
        <div className="col-md-12 statistic_element">
          <span>Total Sale</span> <span>{statistics.totalSaleAmount}</span>
        </div>
        <div className="col-md-12 statistic_element">
          <span>Total sold item</span>
          <span>{statistics.totalSoldItems}</span>
        </div>
        <div className="col-md-12 statistic_element">
          <span>Total not sold item</span>
          <span>{statistics.totalNotSoldItems}</span>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
