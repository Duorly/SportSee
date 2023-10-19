import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./style.scss";

export const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><img alt="logo" src={logo} /></li>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    );
}