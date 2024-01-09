const TemplateExpressions = () => {

    const name = "Keila"

    const data = {
        age: 22,
        city: "Franca"
    }

    return (
        <div>
            <h1>Olá {name}</h1>
            <p>Idade: {data.age}</p>
            <p>Cidade: {data.city}</p>
        </div>

    );

};

export default TemplateExpressions;