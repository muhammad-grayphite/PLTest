import { Routes, Route } from "react-router-dom";
import Home from "./views/home/home";
import Contacts from "./views/contacts/contacts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modalA" element={<Contacts title={"All Contacts"} />} />
        <Route path="/modalB" element={<Contacts title={"US Contacts"} />} />
      </Routes>
    </div>
  );
}
export default App;
