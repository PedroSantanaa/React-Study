import { useState } from "react";
import styles from "./App.module.css";

import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <h1>
      <Header />
      <main className={styles.main}>
        <h1>content</h1>
      </main>
      <Footer />
    </h1>
  );
}

export default App;
