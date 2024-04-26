import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Datos from "./Datos";
import DatosConAuth from "./DatosConAuth";

const App = () => {
  const user = true;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/datosUser"
          element={user ? <DatosConAuth /> : <Navigate to="/" />}
        />
        <Route path="/datos" element={<Datos />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
