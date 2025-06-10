import { PROFILES } from "@/app/mock-data/profiles";
import Address from "@/app/profiles/components/address";

export default function ProfileList() {
    return <>
        <div>
            {PROFILES.map(profile => {
                return <section key={profile.id}>
                    <h1 className="text-4xl font-extrabold text-gray-900"> {profile.id}</h1>
                    <h2>{profile.name}</h2>
                    <h2>{profile.email}</h2>
                    <h2>{profile.phone}</h2>
                    <Address address={profile.address} />
                </section>
            })}
        </div>
    </>
}