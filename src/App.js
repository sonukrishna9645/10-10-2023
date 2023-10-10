import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Logindata from "./components/Login/Logindata";
import Course from "./components/course/Course";
import Home from "./components/home/Home";
import Book from "./components/book/Book";
import Bookview from "./components/book/Bookview";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path={'/'} element={<Login/>}></Route>
    <Route path={'/Ldata'} element={<Logindata/>}></Route>
    <Route path={'/Course'} element={<Course/>}></Route>
    <Route path={'/Home'} element={<Home/>}></Route>
    <Route path={'/Book'} element={<Book/>}></Route>
    <Route path={'/Bookview'} element={<Bookview></Bookview>}></Route>
    </Routes>
    </BrowserRouter>
   

    </div>
  );
}

export default App;
