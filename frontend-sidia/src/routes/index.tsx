import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";
import { Home } from "../pages/Home";


export function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}
