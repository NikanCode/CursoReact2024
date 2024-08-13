import React, {useState, useEffect} from "react";

function App() {
  const [count, setCount] = useState(0);

  //Guardar el valor del contador en el local storage
  useEffect (()=>{
     localStorage.setItem('count', count);

   }, [count]);

  //Recuperar el valor del contador 

  useEffect(()=>{
    const savedCount =  parseInt(localStorage.getItem('count'));
    if(!isNaN(savedCount)){
      setCount(savedCount);
    }
  },[]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount(prevCount => prevCount + 1);
    }, 1000);
    //Limpia el inervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Contador</h1>
      <p>Valor del contador: {count} </p>
      <button onClick={()=> setCount(count + 1)}>Incrementar</button>
      <button onClick={()=> setCount(count - 1)}>Decrementar</button>
      <button onClick={()=> setCount(0)}>Restablecer</button>
    </div>
  );
}

export default App;
