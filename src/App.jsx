import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Introduction/>
      <main>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
