import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Share/Header/Header";
import NotFound from "./Pages/Share/NotFound/NotFound";
import Items from "./Pages/Home/Items/Items/Items";
import Login from "./Pages/Login/Login/Login";
import Blogs from "./Pages/Blogs/Blogs";
import Footer from "./Pages/Share/Footer/Footer";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import InventoryManage from "./Pages/InventoryManagments/InventoryManage";
import AllInventoryItems from "./Pages/AllInventoryManage/AllInventoryItems/AllInventoryItems";
import SignUp from "./Pages/Login/SignUp/SignUp";
import AddItems from "./Pages/AddItems/AddItems";
import MyItems from "./Pages/MyItems/MyItems";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/items" element={<Items></Items>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myItems" element={
           <RequireAuth>
             <MyItems></MyItems>
           </RequireAuth>
        }></Route>
        <Route path="/addItems" element={
           <RequireAuth>
             <AddItems></AddItems>
           </RequireAuth>
        }></Route>
        <Route
          path="/AllInventoryItems"
          element={<RequireAuth>
            <AllInventoryItems></AllInventoryItems>
          </RequireAuth>}
        ></Route>
        <Route
          path="/profile"
          element={<RequireAuth>
            <Profile></Profile>
          </RequireAuth>}
        ></Route>
        <Route
          path="/item/:itemId"
          element={
            <RequireAuth>
              <InventoryManage></InventoryManage>
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
