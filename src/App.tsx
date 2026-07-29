import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PrimeReactProvider } from 'primereact/api'
import './App.css'

import HomePage from "./pages/HomePage"

function App() {
  return (
    <div style={{
      display: "flex", 
      flexDirection: "column",
      minHeight: "100dvh"
    }}>
      <PrimeReactProvider value={{ ripple: true }}>
        <BrowserRouter>
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage/>} />
            </Routes>
          </main>
        </BrowserRouter>
      </PrimeReactProvider>      

      <footer style={{
        marginBottom: "auto", 
        height: "max-content"
      }}>
        <div className="container text-center" style={{ height: "100%" }}>
          <h3>2026 Something Here</h3>
          <strong> Learn more</strong> <a href="">here</a>
        </div>
      </footer>
    </div>
  )
}

export default App
