import React from "react"
import Apis from "./companents/Apis"
import Header from "./companents/Header"
 import Api_max from "./companents/Api_max"
import { BrowserRouter , Route , Routes  } from "react-router-dom"

function App() {
  
  return (
<>
<Header/>

<BrowserRouter>
<Routes>
<Route path="/" element={<Apis/>} />
<Route path="/all" element={<Api_max/>} />

</Routes>

</BrowserRouter>

</>
  )
}

export default App
