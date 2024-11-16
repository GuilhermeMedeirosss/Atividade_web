import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // Estado para armazenar o valor do contador
  const [isRunning, setIsRunning] = useState(true); // Estado para controlar se o contador está rodando

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1); // Incrementa o contador a cada segundo
      }, 1000);
    }

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente ou quando o contador for parado
  }, [isRunning]);

  const handleStop = () => {
    setIsRunning(false); // Pausa o contador
  };

  const handleStart = () => {
    setIsRunning(true); // Reinicia o contador
  };

  return (
    <div style={styles.container}>
      <h1>Contador: {count}</h1>
      <div style={styles.buttons}>
        <button onClick={handleStop} style={styles.button}>
          Parar
        </button>
        <button onClick={handleStart} style={styles.button}>
          Continuar
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  buttons: {
    marginTop: "20px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    margin: "0 5px",
    cursor: "pointer",
    backgroundColor: "#555",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};

export default Counter;
