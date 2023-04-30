import { Outlet, RouterProvider } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";


export function Default(){
    return(
        <div className="layout">
            <Sidebar></Sidebar>

            <div className="content">
                <Outlet></Outlet>
            </div>
        </div>
    )
}