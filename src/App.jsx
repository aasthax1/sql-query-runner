import React, { useState } from "react";
import QueryInput from "./components/QueryInput";
import QueryResults from "./components/QueryResults";
import "./styles/app.css";

const App = () => {
  const [results, setResults] = useState([]);

  const sampleData = {
    "SELECT * FROM employees;": [
      { id: 1, name: "Ashima Singh", department: "IT", salary: 60000 },
      { id: 2, name: "Mridul Das", department: "HR", salary: 45000 },
      { id: 3, name: "Preeti Yadav", department: "Finance", salary: 70000 },
      { id: 4, name: "Yash Dahiya", department: "IT", salary: 55000 },
      { id: 5, name: "Rohit Yadav", department: "Marketing", salary: 48000 },
    ],
    "SELECT * FROM products;": [
      { id: 101, name: "Laptop", price: 899, category: "Electronics" },
      { id: 102, name: "Mouse", price: 25, category: "Accessories" },
      { id: 103, name: "Keyboard", price: 50, category: "Accessories" },
      { id: 104, name: "Monitor", price: 200, category: "Electronics" },
      { id: 105, name: "Headphones", price: 75, category: "Electronics" },
    ],
    "SELECT * FROM employees WHERE department = 'IT';": [
      { id: 1, name: "Ashima Singh", department: "IT", salary: 60000 },
      { id: 4, name: "Yash Dahiya", department: "IT", salary: 55000 },
    ],
    
    
  
    "SELECT * FROM employees WHERE salary > 50000;": [
      { id: 1, name: "Ashima Singh", department: "IT", salary: 60000 },
      { id: 3, name: "Preeti Yadav", department: "Finance", salary: 70000 },
      { id: 4, name: "Yash Dahiya", department: "IT", salary: 55000 },
    ],
    "SELECT * FROM products WHERE category = 'Electronics';": [
      { id: 101, name: "Laptop", price: 899, category: "Electronics" },
      { id: 104, name: "Monitor", price: 200, category: "Electronics" },
      { id: 105, name: "Headphones", price: 75, category: "Electronics" },
    ],
  };

  const handleExecuteQuery = (query) => {
    setResults(sampleData[query] || []);
  };

  return (
    <div className="app-container">
      <h1>SQL Query Runner</h1>
      <QueryInput onExecute={handleExecuteQuery} />
      <QueryResults results={results} />
    </div>
  );
};

export default App;
