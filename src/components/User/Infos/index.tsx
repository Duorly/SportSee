import calories from "./assets/calories.svg";
import proteines from "./assets/protein.svg";
import glucides from "./assets/carbs.svg";
import lipides from "./assets/fat.svg";
import { CardInfo, CardInfoType } from "@/utils/models/CardInfo";
import "./style.scss";

export const UserCardInfo = ({ nbGramme, type }: CardInfo) => {

    let svg: string = "";

    switch (type) {
        case CardInfoType.Calories:
            svg = calories;
            break;
        case CardInfoType.Proteines:
            svg = proteines;
            break;
        case CardInfoType.Glucides:
            svg = glucides;
            break;
        case CardInfoType.Lipides:
            svg = lipides;
            break;
    }

    return (
        <div className="card">
            <div className="details">
                <img title="img" src={svg}></img>
                <div className="description">
                    <h3>
                        {nbGramme}
                        {type === 'Calories' ? "kCal" : "g"}
                    </h3>
                    <h4>{type}</h4>
                </div>
            </div>
        </div>
    )
}