import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Share/Header/Header";
import NotFound from "./Pages/Share/NotFound/NotFound";
import Items from "./Pages/Home/Items/Items/Items";
import Login from "./Pages/Login/Login/Login";
import Blogs from "./Pages/Blogs/Blogs";
import Footer from "./Pages/Share/Footer/Footer";
import ManageItems from "./Pages/Home/ManageItems/ManageItems/ManageItems";
import DetailItems from "./Pages/DetailItems/DetailItems";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/items" element={<Items></Items>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/item/:itemId" element={<DetailItems></DetailItems>}></Route>
        <Route path="/ManageItem" element={<ManageItems></ManageItems>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
