import Client from "@/app/server/components/client"
import Server from "@/app/server/components/server"

export default function ServerPage() {
    return <div>
        {/* <Client/> */}
        <Client>
            {/* Pass server component as Prop to Client, so that Server Component never
            becomes client Component */}
            <Server />
            
        </Client>
    </div>
}