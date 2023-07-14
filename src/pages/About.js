import { Navigate } from "react-router-dom"
import { useState } from "react"
export default function About() {
    const [user, setUser] = useState("maria")
    if (!user) {
        return <Navigate to="/" replace={true} />
    }
    return (
        <div className="about">
            < h2 > About us</h2 >
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eius fugiat ducimus sed
                perferendis perspiciatis esse dicta, magnam aperiam rem similique exercitationem in nesciunt
                neque deleniti architecto. Asperiores, optio sed.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eius fugiat ducimus sed
                perferendis perspiciatis esse dicta, magnam aperiam rem similique exercitationem in nesciunt
                neque deleniti architecto. Asperiores, optio sed.
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eius fugiat ducimus sed
                perferendis perspiciatis esse dicta, magnam aperiam rem similique exercitationem in nesciunt
                neque deleniti architecto. Asperiores, optio sed.
            </p>
            <button onclick={() => setUser(null)}>Logout</button>
        </div >
    )
}