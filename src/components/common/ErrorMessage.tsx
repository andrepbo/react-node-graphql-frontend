interface ErrorProps {
    message: string
}

export default function ErrorMessage({ message }: ErrorProps) {
    return (
        <div>
            <p>Error: {message}</p>
        </div>
    )
}