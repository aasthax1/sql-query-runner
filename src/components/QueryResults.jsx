import React from "react";

const QueryResults = ({ results }) => {
  if (!results || results.length === 0) {
    return <p className="no-results">No data available.</p>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {Object.keys(results[0]).map((key) => (
              <th key={key}>{key.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueryResults;
