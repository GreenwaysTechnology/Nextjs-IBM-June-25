const url = 'http://localhost:3000/api/comments'

export async function fetchComments() {
    const response = await fetch(url)
    const comments = await response.json()
    return comments
}
export default async function CommentsPage() {
    const comments = await fetchComments()
    return <div>
        <ul>
            {comments.map(comment => {
                return <li key={comment.id}>
                    <span>{comment.name}</span>
                </li>
            })}
        </ul>
    </div>
}