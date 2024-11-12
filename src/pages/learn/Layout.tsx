import { Outlet } from "react-router-dom"
import LearnAsidePage from "../../components/LearnAside"
import Navbar from "../../components/Navbar"

const LearnLayout = () => {
    return (
        <>
            <Navbar />
            <LearnAsidePage />
            <Outlet />
        </>
    )
}

export default LearnLayout