import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro/cadastroPage";
import Login from "./pages/Login/loginPage";

function MainRoutes() {
    return (
        <Router>
            <Routes>
              <Route path="/" element= {<Login />}/>
              <Route path="/cadastro" element= {<Cadastro />}/>
            </Routes>
        </Router>
    );
}

export default MainRoutes;