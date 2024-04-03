import { Route, Routes } from "react-router-dom"
import Welcome from './Welcome.jsx'
import Detect from './Detect.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Welcome/>} />
      <Route path="tests"  element={<Detect/>} />
    </Routes>
  )
}
export default App