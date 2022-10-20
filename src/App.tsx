import { useState, useMemo as useEffect, useCallback } from "react";
import { AlgorithmSelector } from "./components/AlgorithmSelector/AlgorithmSelector";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="h-screen mx-auto flex justify-center items-center bg-bgColor  text-dark ">
      <Main />
    </div>
  );
}

export default App;
