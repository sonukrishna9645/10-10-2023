import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Logindata from "./components/Login/Logindata";
import Course from "./components/course/Course";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path={'/'} element={<Login/>}></Route>
    <Route path={'/Ldata'} element={<Logindata/>}></Route>
    <Route path={'/Course'} element={<Course/>}></Route>
    </Routes>
    </BrowserRouter>
   

    </div>
  );
}

export default App;
