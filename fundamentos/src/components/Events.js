const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e) //dados do evento
        console.log("Ativou o evento")
    }

    const renderSomething = (x) => {

        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando isso também!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;