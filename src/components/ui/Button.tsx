import { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    width?: "w-fit" | "w-full"
}

const Button = ({ children, className, width = "w-fit", ...rest }: IProps) => {
    return (
        <button className={`${className} ${width}`} {...rest}>
            {children}
        </button>
    )
}

export default Button