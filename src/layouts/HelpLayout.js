import { NavLink, Outlet } from 'react-router-dom';

import React from 'react';

export default function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>Page d'aide</h2>
            <p>Lorem ipsum, dolor sit amet consectetur !</p>

            <nav>
                <NavLink to="faq">Voir les FAQ</NavLink>
                <NavLink to="contact">Contacter nous</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}
