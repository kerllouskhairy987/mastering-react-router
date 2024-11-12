import { TextareaHTMLAttributes } from "react"

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

const TextArea = ({ ...rest }: IProps) => {
    return (
        <textarea
            name="textArea"
            id="textArea"
            rows={6}
            className="border-2 border-red-500 bg-transparent p-3"
            {...rest}
        />
    )
}

export default TextArea;