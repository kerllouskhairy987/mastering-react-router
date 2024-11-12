import { useLocation } from "react-router-dom"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"

const LoginPage = () => {
    const location = useLocation()
    console.log(location)
    
    return (
        <div className="flex flex-col space-y-5 w-96 mx-auto mt-5 text-center">
            <Input />
            <Input />
            <Button className=" p-3 border-2 border-red-500 rounded mx-auto" width="w-fit">
                Submit
            </Button>
        </div>
    )
}

export default LoginPage