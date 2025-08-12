// import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router";

import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Unknown from "./components/unknown/Unknown";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Unknown />} />
          <Route path="/clusters" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
