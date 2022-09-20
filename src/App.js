import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// Our components
import UserManagement from './components/UserManagement';
import EditUser from "./components/EditUser";

function App() {
  return (
    <Router>

    <Routes>

      <Route path="/usermanagement" element={<UserManagement/>} />

      <Route path="/edituser" element={<EditUser/>} />

    </Routes>

    </Router>
    
  );
}

export default App;
