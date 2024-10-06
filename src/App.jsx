// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SalesLanding from "./app/sales/SalesLanding/SalesLanding";
import OperationLanding from "./app/operations/OperationLandingPage/OperationLanding";
import OperationExecutive from "./app/operations/OperationExecutive/OperationExecutive";
import AdminLanding from "./app/admin/AdminLanding/AdminLanding";

function App() {
  return (
    <Router>
      <Routes>
        {/* Update the path to "*" to handle all sub-routes */}
        <Route path="/*" element={<AdminLanding />} />
        <Route path="/sales/*" element={<SalesLanding />} />
        <Route path="/operations/*" element={<OperationLanding />} />
        <Route path="/operationex/*" element={<OperationExecutive />} />
      </Routes>
    </Router>
  );
}

export default App;
