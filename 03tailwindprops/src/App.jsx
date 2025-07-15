import Card from "./components/Card"


function App() {
  const myObj = {
    name : "Dhananjay",
    age : 22
  };

  let arr = [1, 3, 5]

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-3xl w-40 text-center p-1 m-3'>Hello World!</h1>
      <Card username ="Chai Aur Reacr" btnText="Click me"/>
      <Card username="Dhananjay" btnText="Visit me"/>
    </>
  )
}

export default App
