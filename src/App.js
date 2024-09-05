import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="main-content">
      <Header />
      {/* This will render the matched route component */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
