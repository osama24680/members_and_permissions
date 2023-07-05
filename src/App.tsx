import React from "react";
import Members from "./Page/Members";
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.AppComp}>
      <div className={styles.container}>
        <Members />
      </div>
    </div>
  );
};

export default App;
