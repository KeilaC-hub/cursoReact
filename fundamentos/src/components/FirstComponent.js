import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return (
        <div>
            <h1>Teste componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;