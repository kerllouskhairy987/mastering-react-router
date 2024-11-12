import { useLocation } from "react-router-dom"
import Button from "../components/ui/Button"
import TextArea from "../components/ui/TextArea"

const ContributePage = () => {
    // const location = useLocation()
    // console.log(location)
    const { state } = useLocation();   // By Using Destructuring 

    return (
        <div className="flex flex-col space-y-5 w-96 mx-auto">
            <h2>Issue: 🖐 Bug Report</h2>
            <h2>🖐 Ya {state.email}</h2>
            <TextArea />
            <Button className=" p-3 border-2 border-red-500 rounded bg-red-500" width="w-full" >
                Submit New Issue
            </Button>
        </div>
    )
}

export default ContributePage