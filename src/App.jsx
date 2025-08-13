import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result";
import { useState } from "react"

function App() {
  const [userInputValues, SetUserInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 12,
    duration: 1,
  });

  function handleChange(key,value){
    SetUserInputValues( pre => {
      return {
        ...pre,
        [key]: value,
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput userInputValues={userInputValues} onChangeValue={handleChange}/>
      <Result userInputValues={userInputValues}/>
    </>
  )
}

export default App
