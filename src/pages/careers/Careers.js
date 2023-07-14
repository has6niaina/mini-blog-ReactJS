import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
    const careers = useLoaderData();
    console.log(useLoaderData());
    return (
        <div className="careers">
            <p>Hello</p>
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Placé à {career.location}</p>
                </Link>
            ))}
        </div>
    )
}

//loader function
export const careersLoader = async () => {
    const res = await fetch('http://localhost:3333/careers')
    // console.log('response attendu', res)
    if (!res.ok) {
        throw Error('The server cannot be fetched the careers');
    }

    return res.json();
}  