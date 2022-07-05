import Home from "./pages/Home";
import { Routes, Route, } from "react-router-dom";
import VotingPage from "./pages/VotingPage";
import { UserProvider } from './Context/index.js'
import Resultpage from "./pages/Resultpage";
function App() {
  return (
    <UserProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/vote' element={<VotingPage />} />
          <Route path='/result' element={<Resultpage />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
