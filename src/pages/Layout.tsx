import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <h3 className="text-center text-red-500">Root Layout</h3>
            <Outlet />
        </>
    )
}

export default RootLayout