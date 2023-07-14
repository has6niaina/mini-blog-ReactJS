import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
    const { id } = useParams();
    const career = useLoaderData();
    return (
        <div className="career-details">
            <h2>Carrier detail de {career.title}</h2>
            <p>Commencer avec une salire de {career.salary}</p>
            <p>Emplacement : {career.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae cupiditate
                    iure tenetur aliquid veritatis fugit, aperiam ex, laudantium pariatur tempore optio
                    voluptatum officia, delectus at dolores laborum distinctio asperiores.</p>
            </div>
        </div>
    )
}
//Loader function
export const CareerDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch('http://localhost:3333/careers/' + id);

    if (!res.ok) {
        throw Error('The serrver cannot be contacted');
    }

    return res.json();
}