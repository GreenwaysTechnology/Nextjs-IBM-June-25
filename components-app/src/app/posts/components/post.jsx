'use client'

import { useState } from "react"

export default function Post(props) {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Post 1', body: 'this is first Post' },
        { id: 2, title: 'Post 2', body: 'this is second Post' }
    ])
    //To handle submitt button either add or update
    const [isEditing, setIsEditing] = useState(false)

    //To handle form : to add new post into list
    const [form, setForm] = useState({ title: '', body: '', id: null })

    //Listeners : To save or update Post
    const handleSubmit = (e) => {
        e.preventDefault()
        isEditing ? updatePost() : addPost()
    }
    //
    const updatePost = () => {
        //array update
        setPosts(posts.map(post => (post.id === form.id ? form : post)))
        //Reset/clear the form
        setForm({ title: '', body: '', id: null })
        //reset add 
        setIsEditing(false)
    }
    const addPost = () => {
        //new Post object
        const newPost = { id: Date.now(), title: form.title, body: form.body }
        //add post into posts array
        setPosts([...posts, newPost])
        //Reset/clear the form
        setForm({ title: '', body: '', id: null })
    }

    //Edit Post
    const handleEdit = (post) => {
        console.log(post)
        //load into form fields
        setForm({ title: post.title, body: post.body, id: post.id })
        //reset Flag from add to edit
        setIsEditing(true)
    }
    //Delete Post
    const handleDelete = id => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return <div>
        {/* To add new post or edit existing */}
        {/* Todo: Remove this after completing */}
        {/* {JSON.stringify(form)} */}
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" required onChange={e => setForm({ ...form, title: e.target.value })} value={form.title} placeholder="Title" />
            </div>
            <div>
                <textarea placeholder="Body" required onChange={e => setForm({ ...form, body: e.target.value })} value={form.body} />
            </div>
            <div>
                <button type="submit">{isEditing ? 'Update' : 'Add'} Post</button>
            </div>
        </form>

        {/* List existing Posts */}
        <ul>
            {posts.map(post => {
                return <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={(e) => {
                        handleEdit(post)
                    }}>Edit</button>
                    <button onClick={(e) => {
                        handleDelete(post.id)
                    }}>Delete</button>
                </li>
            })}
        </ul>
    </div>
}