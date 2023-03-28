import './App.css'
import BaseLayout from './components/BaseLayout'
import {BrowserRouter} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  )
}

export default App;