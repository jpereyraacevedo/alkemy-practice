import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { Login } from "./components/Login/Login";
import { Detail } from "./components/Detail/Detail";
import { Results } from "./components/Results/Results";
// Styles
import "./App.css";
import "./bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/listado" element={<List />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
