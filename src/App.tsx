import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import MainPage from "./pages/MainPage"
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <NavBar title="Papesh Portfolio" items={["Home", "Projects", "Background", "Contact"]}/> 
        <main style={{ flex: 1 }}>
          <Routes>
            {<Route path="/" element={<Navigate to="./matthew-papesh.github.io/index" replace />} />}
            {<Route path="matthew-papesh.github.io" element={<Navigate to="./index" replace />} />}
            <Route path="matthew-papesh.github.io/index" element={<MainPage />} />
          </Routes>
        </main>
        <footer className="bg-dark text-light py-3" style={{ height: "max-content" }}>
          <div className="container text-center">
            <h3>2026 Something Here</h3>
            <strong>Learn more </strong>
            <a href="" className="text-info">here</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
