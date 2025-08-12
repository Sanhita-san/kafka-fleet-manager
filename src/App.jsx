import { BrowserRouter, Routes, Route } from "react-router";

import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Unknown from "./components/unknown/Unknown";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/clusters" element={<Dashboard />} />
            <Route path="/*" element={<Unknown />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
