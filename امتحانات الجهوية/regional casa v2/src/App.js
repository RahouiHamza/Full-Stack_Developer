import "./App.css";

// Components
import Menu from "./components/Menu";
import Q3 from "./components/Q3";
import Q4 from "./components/Q4";
import Q5 from "./components/Q5";
import Q6 from "./components/Q6";

// React router
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App container-fluid">
            <Menu />
            <Routes>
                <Route path="/" element={<Q3 />} />
                <Route path="/q3">
                    <Route index element={<Q3 />} />
                    <Route path=":indepYear" element={<Q3 />} />
                </Route>
                <Route path="/q4" element={<Q4 />} />
                <Route path="/q5" element={<Q5 />} />
                <Route path="/q6" element={<Q6 />} />
            </Routes>
        </div>
    );
}

export default App;
