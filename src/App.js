import React from 'react';
import './App.css';
import data from "./data.json";

import FilterableProductTable from "./components/FilterableProductTable.jsx";
import SearchBar from './components/SearchBar';
// import ProductRow from "./components/ProductRow";
// import ProductTable from "./components/ProductTable";
// import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
    <h1>IronStore</h1> 
    <SearchBar />

    <FilterableProductTable products = {data.data} />
  </div>
  );
};



export default App;
