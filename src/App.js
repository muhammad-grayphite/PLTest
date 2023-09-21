import { Routes, Route } from "react-router-dom";
import Home from "./views/home/home";
import { Contacts } from "./views/contacts/AllContacts";
// import { ModalA } from "./views/modalA/modalA";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modalA" element={<Contacts title={"Modal A"} />} />
        <Route path="/modalB" element={<Contacts title={"Modal B"} />} />
        {/* <Route path="/modalB" element={<Contacts text={"Modal B"} />} /> */}
      </Routes>
    </div>
  );
}

export default App;