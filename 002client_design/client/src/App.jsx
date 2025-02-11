import CoffeeAdd from "./coffee/CoffeeAdd"
import CoffeeDisplay from "./coffee/CoffeeDisplay"
import CoffeeEdit from "./coffee/CoffeeEdit"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<CoffeeDisplay />} />
            <Route path="/coffee/display" element={<CoffeeDisplay />} />
            <Route path="/coffee/add" element={<CoffeeAdd />} />
            <Route path="/coffee/edit/:id" element={<CoffeeEdit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App
