import Home from "./Home"
import { useDispatch, useSelector } from "react-redux"

const App = () => {
  const dispatch = useDispatch()
  const { value } = useSelector((state) => state.custom)
  console.log(value)

  const addBtn = () => {
    dispatch({ type: "increment" })
  }

  const subBtn = () => {
    dispatch({ type: "decrement" })
  }

  const incrementBy = () => {
    dispatch({ type: "incrementByValue", payload: 25 })
  }
  return (
    <div>
      <Home value={value} />
      Value: {value}
      <button onClick={addBtn}>increment</button>
      <button onClick={subBtn}>decrement</button>
      <button onClick={incrementBy}>increment by value</button>
    </div>
  )
}
export default App
