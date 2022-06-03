import { Route, Routes } from "react-router-dom";
import { New } from "../pages/New";
import { Login } from "../pages/Login";
import { Feed } from "../pages/Feed";

const Router = () =>{
    return(
        
            <Routes>
                <Route exact path="/new" element={<New/>}></Route>
                <Route exact path="/login" element={<Login/>}></Route>
                <Route exact path="/" element={<Feed/>}></Route>

            </Routes>
 
    )
}

export { Router };