import { useState } from "react";
import Code from "./Code";
function App() {
  
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  }
  const decValue = () => {
    if(counter === 0){
      console.error(`Counter value can't be negative`)
    }else
      setCounter(counter - 1);
  }

  return (
    // freagment
    <> 
      <h1>Counter value : {counter}</h1>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={decValue}>Dec Value {counter}</button>
    </>
  )
}

export default App
