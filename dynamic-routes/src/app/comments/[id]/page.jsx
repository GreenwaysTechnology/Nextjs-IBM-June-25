
export async function fetchCommentById(id) {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    const response = await fetch(url)
    const comment = await response.json()
    return comment
}

export default async function CommentsDetailsPage(props) {
    const id = (await props.params).id
    const comment = await fetchCommentById(+id)
    console.log(comment)
    return <div>
        <h1>{id}</h1>
        <h2>{comment.name}</h2>
        <h2>{comment.email}</h2>
        <h2>{comment.body}</h2>
    </div>
}