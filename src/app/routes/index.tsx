import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Country } from "../pages";

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Dashboard/>} />
                <Route path={`/:country`} element={<Country />} />

                <Route path="*" Component={() => <Navigate to="/"/>}/>

            </Routes>
        </BrowserRouter>
    )
}