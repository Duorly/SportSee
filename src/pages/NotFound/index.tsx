import { NavLink } from "react-router-dom";
import "./style.scss";

export const NotFound = (): JSX.Element => {
    return (
        <div className="notFound">
            <div>
                <p className="notFound__code">404</p>
                <p className="notFound__text">Oups! La page que vous demandez n&apos;existe pas.</p>
                <span className="home-link"><NavLink className="home-nav-link" to="/">Retourner sur la page
                    d’accueil</NavLink></span>
            </div>
        </div>
    );
}