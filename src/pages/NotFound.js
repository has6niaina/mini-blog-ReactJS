import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <h2>Page not Found 404</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quo accusamus autem numquam maxime ad
                magnam iure optio quaerat incidunt pariatur, delectus necessitatibus adipisci at, omnis eos corporis
                expedita temporibus. </p>
            <p>Retourner à la <Link to="/">page d'acceuil</Link>.</p>
        </div>
    )
}
