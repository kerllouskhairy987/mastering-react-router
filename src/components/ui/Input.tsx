import { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement> { }

const Input = ({ ...rest }: IProps) => {
    return (
        <input type="text" className="p-4 border-2 border-red-500 rounded bg-transparent" placeholder="enter your value"  {...rest} />
    )
}

export default Input