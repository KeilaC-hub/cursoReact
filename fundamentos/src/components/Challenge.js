const Challenge = () => {

    const a = 6;
    const b = 2;

    const handleMyEvent = () => {
        console.log(`Resultado: ${a + b}`)
    }

    return (
        <div>
            <h1>Valor de A: {a}</h1>
            <h1>Valor de B: {b}</h1>
            <button onClick={handleMyEvent}>Soma dos valores no console</button>
        </div>
    );
};

export default Challenge;