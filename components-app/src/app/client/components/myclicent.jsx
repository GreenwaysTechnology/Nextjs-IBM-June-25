'use client'
import MyServer from "@/app/client/components/myserver"

//This is client component
export default function MyClient() {
    return <div>
        <h1>Client Component uses Another Server Component</h1>
        <MyServer />
    </div>
}