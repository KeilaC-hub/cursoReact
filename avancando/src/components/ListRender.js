import { useState } from "react"
const ListRender = () => {

    const [list] = useState(["Matheus", "Pedro", "Josias"]);

    const [users, setUsers] = useState ([
      {id: 1, name: "Matheus", age: 31},
      {id: 2, name: "João", age: 28},
      {id: 3, name: "Pedro", age: 44},
    ]);

    {/* O que ser Match vai excluir e o que tiver ID diferente vai deixar*/}
    const deleteRandom = () => {
      const randomNumer = Math.floor(Math.random() * 4);

      setUsers((prevUsers) => {
        console.log(prevUsers)
        return prevUsers.filter((user) => randomNumer !== user.id)
      })
    };

  return (
    <div>

        {/*Renzerizando a lista com index na key*/}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        {/*Renzerizando a lista com o id do array na key*/}
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender;