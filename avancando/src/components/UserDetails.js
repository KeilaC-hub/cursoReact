{/* Tarefa 4 */}

const UserDetails = ({nome, idade, profissao}) => {

    return (
        <div>
            <h2>{nome}</h2>
            <ul>
                <li>Idade: {idade}</li>
                <li>Profissão: {profissao}</li>
                <p>Pode tirar CNH? </p>
                {idade >= 18 ? <p>Pode tirar :D</p> : <p>Não pode ;-;</p>}
            </ul>
        </div>
    )
};

export default UserDetails;