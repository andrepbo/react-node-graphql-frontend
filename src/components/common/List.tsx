interface ListProps {
    items: number[]
}

export default function List({ items }: ListProps) {
    return (
        <ol>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ol>
    );
}