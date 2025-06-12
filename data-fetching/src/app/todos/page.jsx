
export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    const todos = await response.json()
    return todos
}

export default async function Todos() {
    const todos = await fetchTodos()
    console.log(todos)
    return <div>
        <ul>
            {
                todos.map(todo => {
                    return <li key={todo.id}>
                        <span>{todo.title}</span>
                    </li>
                })
            }
        </ul>
    </div>
}