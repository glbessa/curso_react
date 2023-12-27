type Props = {
    children: string | JSX.Element | JSX.Element[]
};

export default function Container({ children } : Props) {
    return (
        <div>
            <h1>Componente pai</h1>
            {children}
        </div>
    )
}