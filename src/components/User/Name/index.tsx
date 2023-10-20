import "./style.scss";

interface TitleProps { name: string }

export const UserName = ({ name }: TitleProps) => {
    return (
        <div className="user-name">
            <h1>
                Bonjour <span>{name}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};