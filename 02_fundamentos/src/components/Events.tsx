export default function Events() {
    const handleEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e);
    }

    return (
        <div>
            <div>
                <button onClick={handleEvent}>Clique aqui!</button>
            </div>
        </div>
    )
}