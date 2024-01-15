import { useState } from "react";

{/*Renderização com condição*/}
const ConditionalRender = () => {

        const [x] = useState(true);

        const [name, setName] = useState("Mat")

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim</p>}
            {!x && <p>Agora x é falso</p>}

            <h1>If ternário</h1>
            {name === "Jão" ? (
                <div>
                    <p> O nome está correto</p>
                </div>
                ) : (
                <div>
                    <p>Ops, está errado!</p>
                </div>
            )}
            <button onClick={() => setName("Jão")}>Clica aqui</button>

        </div>
    )
}

export default ConditionalRender;