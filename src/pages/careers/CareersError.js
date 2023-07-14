import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function CareersError() {
    const error = useRouteError();
    return (
        <div className="careers-error">
            <h2>Erreur</h2>
            <p>{error.message}</p>
            <Link to="/">Retourner à la page d'acceuil</Link>
        </div>
    )
}
