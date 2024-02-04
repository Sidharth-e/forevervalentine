import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Propose from "./page/propose/Proposeday";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={ <Main/>} />
      <Route path="/propose" element={<Propose />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
