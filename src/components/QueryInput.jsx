import React, { useState } from "react";

const QueryInput = ({ onExecute }) => {
  const [selectedQuery, setSelectedQuery] = useState("");
  const [queryText, setQueryText] = useState("");

  const queries = [
    { label: "Select a Query", value: "" },
    { label: "Get all employees", value: "SELECT * FROM employees;" },
    { label: "Get all products", value: "SELECT * FROM products;" },
    { label: "Get employees from IT department", value: "SELECT * FROM employees WHERE department = 'IT';" },
    { label: "Get employees with salary above Rs.50,000", value: "SELECT * FROM employees WHERE salary > 50000;" }, 
    { label: "Get products in 'Electronics' category", value: "SELECT * FROM products WHERE category = 'Electronics';" }  
  ];

  const handleQueryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedQuery(selectedValue);
    setQueryText(selectedValue);
  };

  return (
    <div className="query-input-container">
      <label>Select a Query:</label>
      <select className="query-dropdown" value={selectedQuery} onChange={handleQueryChange}>
        {queries.map((query, index) => (
          <option key={index} value={query.value}>
            {query.label}
          </option>
        ))}
      </select>

      <textarea
        className="query-textarea"
        value={queryText}
        onChange={(e) => setQueryText(e.target.value)}
        placeholder="Write or select a SQL query..."
      />

      <button className="execute-btn" onClick={() => onExecute(queryText)} disabled={!queryText}>
        Execute Query
      </button>
    </div>
  );
};

export default QueryInput;
