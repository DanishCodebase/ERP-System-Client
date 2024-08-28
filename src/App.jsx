// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SalesAdminLanding from "./app/sales/SalesLanding/SalesAdminLanding";

function App() {
  return (
    <Router>
      <Routes>
        {/* Update the path to "*" to handle all sub-routes */}
        <Route path="/*" element={<SalesAdminLanding />} />
      </Routes>
    </Router>
  );
}

export default App;