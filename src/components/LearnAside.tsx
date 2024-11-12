import { NavLink } from "react-router-dom"

const LearnAsidePage = () => {
    return (
        <aside>
            <nav className="m-5">
                <ul className="flex flex-col gap-6">
                    <li><NavLink to="/learn" end>Quick start</NavLink></li>
                    <li><NavLink to="/learn/thinking-in-react">Thinking In react</NavLink></li>
                    <li><NavLink to="/learn/installation">installation</NavLink></li>
                    <li><NavLink to="/learn/test">Aside Testing From Me</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
}

export default LearnAsidePage