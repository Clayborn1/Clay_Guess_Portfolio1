import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Clayborn Guess</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" exact to="/">Home <span className="sr-only"></span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Blog">Blog</NavLink>
                    </li>                   
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Projects">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Resume">Resume</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default navbar;