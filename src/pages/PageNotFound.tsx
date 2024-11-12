import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center w-full">
            <h2 className="text-9xl text-red-600">404</h2>
            <h3 className="font-bold text-2xl"><span className="text-red-600">Oops! </span> Page Not Found</h3>
            <p className="my-10">The page you are looking for is not found</p>
            <Link
                to={"/"}
                className="bg-red-500 py-2 px-4 text-white rounded"
            >
                Go Home
            </Link>
        </div>
    )
}

export default PageNotFound